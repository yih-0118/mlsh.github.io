const app = new Vue({
    el: '#app',
    data: {
        selectedDataType: '',
        selectedCounty: '',
        selectedTown: '',
        selectedStationName: '',
        counties: [],
        towns: [],
        stationNames: [],
        stationNamesByTown: {},
        weather: null,
        weatherData: null
    },
    mounted() {
        // this.fetchWeatherData();
    },
    methods: {
        fetchData() {
            if (this.selectedDataType === '氣象觀測資料') {
                this.fetchWeatherData('https://opendata.cwa.gov.tw/fileapi/v1/opendataapi/O-A0001-001?Authorization=CWB-AFCD05A4-A82B-452D-A0C0-3434C0A7B30D&downloadType=WEB&format=JSON');
            } else if (this.selectedDataType === '天氣觀測報告') {
                this.fetchWeatherData('https://opendata.cwa.gov.tw/fileapi/v1/opendataapi/O-A0003-001?Authorization=CWB-AFCD05A4-A82B-452D-A0C0-3434C0A7B30D&downloadType=WEB&format=JSON');
            } else if (this.selectedDataType === '雨量觀測資料') {
                this.fetchWeatherData('https://opendata.cwa.gov.tw/fileapi/v1/opendataapi/O-A0002-001?Authorization=CWB-AFCD05A4-A82B-452D-A0C0-3434C0A7B30D&downloadType=WEB&format=JSON');
            }
        },
        getUnit(key) {
            switch (key) {
                case '氣溫':
                    return '°C';
                case '相對濕度':
                    return '%';
                case '氣壓':
                    return 'hPa';
                case '風速':
                    return 'm/s';
                case '雨量':
                case '過去10分鐘累積雨量':
                case '過去1小時累積雨量':
                case '過去3小時累積雨量':
                case '過去6小時累積雨量':
                case '過去12小時累積雨量':
                case '過去24小時累積雨量':
                case '過去2天累積雨量':
                case '過去3天累積雨量':
                    return 'mm';
                case '今日最高':
                    return '°C';
                case '今日最低':
                    return '°C';
                default:
                    return '';
            }
        },

        fetchWeatherData(api) {
            fetch(api)
                .then(response => response.json())
                .then(data => {
                    this.weatherData = data;
                    const counties = [
                        '基隆市',
                        '臺北市',
                        '新北市',
                        '桃園市',
                        '新竹市',
                        '新竹縣',
                        '苗栗縣',
                        '臺中市',
                        '彰化縣',
                        '南投縣',
                        '雲林縣',
                        '嘉義市',
                        '嘉義縣',
                        '臺南市',
                        '高雄市',
                        '屏東縣',
                        '宜蘭縣',
                        '花蓮縣',
                        '臺東縣',
                        '澎湖縣',
                        '金門縣',
                        '連江縣'
                    ];
                    this.counties = counties;
                    const towns = Array.from(new Set(data.cwaopendata.dataset.Station.map(station => station.GeoInfo.TownName)));
                    towns.forEach(town => {
                        const townStations = data.cwaopendata.dataset.Station.filter(station => station.GeoInfo.TownName === town);
                        const stationNames = Array.from(new Set(townStations.map(station => station.StationName)));
                        this.$set(this.stationNamesByTown, town, stationNames);
                    });
                });
        },



        updateTowns() {
            this.towns = [];
            if (this.selectedCounty) {
                const selectedCountyStations = this.weatherData.cwaopendata.dataset.Station.filter(station => station.GeoInfo.CountyName === this.selectedCounty);
                let towns = Array.from(new Set(selectedCountyStations.map(station => station.GeoInfo.TownName)));
                if (this.selectedCounty === '新北市' && this.selectedDataType === '氣象觀測資料') {
                    towns = towns.filter(town => town !== '新莊區');
                    towns.unshift('新莊區');
                }
                const index = towns.indexOf('三重區');
                if (index > 0) {
                    towns.splice(index, 1);
                    towns.splice(1, 0, '三重區');
                }
                this.towns = towns;
            }
        },
        updateStations() {
            this.stationNames = [];
            if (this.selectedCounty && this.selectedTown) {
                const selectedStations = this.weatherData.cwaopendata.dataset.Station.filter(station =>
                    station.GeoInfo.CountyName === this.selectedCounty &&
                    station.GeoInfo.TownName === this.selectedTown
                );
                // 獲取選擇鄉鎮市區中存在的觀測站名稱
                const stationNames = selectedStations.map(station => station.StationName);
                this.stationNames = stationNames;
            }
        },
        fetchWeatherInfo() {
            if (this.selectedCounty && this.selectedTown && this.selectedStationName) {
                const selectedStations = this.weatherData.cwaopendata.dataset.Station.filter(station =>
                    station.GeoInfo.CountyName === this.selectedCounty &&
                    station.GeoInfo.TownName === this.selectedTown &&
                    station.StationName === this.selectedStationName
                );

                const selectedStation = selectedStations[0];

                if (selectedStation) {
                    let weatherData = null;

                    if (this.selectedDataType === '氣象觀測資料' || this.selectedDataType === '天氣觀測報告') {
                        weatherData = {
                            天氣: selectedStation.WeatherElement.Weather,
                            氣溫: selectedStation.WeatherElement.AirTemperature,
                            相對濕度: selectedStation.WeatherElement.RelativeHumidity,
                            氣壓: selectedStation.WeatherElement.AirPressure,
                            風速: selectedStation.WeatherElement.WindSpeed,
                            今日最高: selectedStation.WeatherElement.DailyExtreme.DailyHigh.TemperatureInfo.AirTemperature,
                            今日最低: selectedStation.WeatherElement.DailyExtreme.DailyLow.TemperatureInfo.AirTemperature
                        };
                    } else if (this.selectedDataType === '雨量觀測資料' && selectedStation.RainfallElement) {
                        weatherData = {
                            '雨量': selectedStation.RainfallElement.Now.Precipitation,
                            '過去10分鐘累積雨量': selectedStation.RainfallElement.Past10Min.Precipitation,
                            '過去1小時累積雨量': selectedStation.RainfallElement.Past1hr.Precipitation,
                            '過去3小時累積雨量': selectedStation.RainfallElement.Past3hr.Precipitation,
                            '過去6小時累積雨量': selectedStation.RainfallElement.Past6hr.Precipitation,
                            '過去12小時累積雨量': selectedStation.RainfallElement.Past12hr.Precipitation,
                            '過去24小時累積雨量': selectedStation.RainfallElement.Past24hr.Precipitation,
                            '過去2天累積雨量': selectedStation.RainfallElement.Past2days.Precipitation,
                            '過去3天累積雨量': selectedStation.RainfallElement.Past3days.Precipitation
                        };
                    }

                    this.weather = weatherData;
                } else {
                    this.weather = null;
                }
            }
        }
    },
    watch: {
        selectedDataType: function () {
            this.selectedCounty = '';
            this.selectedTown = '';
            this.selectedStationName = '';
            this.towns = [];
            this.stationNames = [];
            this.updateTowns();
            this.fetchWeatherInfo();
        },
        selectedCounty: function () {
            this.selectedTown = '';
            this.selectedStationName = '';
            this.towns = [];
            this.stationNames = [];
            this.updateTowns();
            this.fetchWeatherInfo();
        },
        selectedTown: function () {
            this.selectedStationName = '';
            this.stationNames = [];
            this.updateStations();
            this.fetchWeatherInfo();
        },
        selectedStationName: function () {
            this.fetchWeatherInfo();
        }
    }
});