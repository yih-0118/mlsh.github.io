// index.js
const app = new Vue({
    el: '#app',
    data: {
        ObsTime: '',
        selectedDataType: '',
        selectedCounty: '',
        selectedTown: '',
        selectedStationName: '',
        counties: [],
        towns: [],
        stationNames: [],
        stationNamesByTown: {},
        weather: null,
        weatherData: null,
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            const apiUrl = {
                '氣象觀測資料': 'https://opendata.cwa.gov.tw/fileapi/v1/opendataapi/O-A0001-001?Authorization=CWB-AFCD05A4-A82B-452D-A0C0-3434C0A7B30D&downloadType=WEB&format=JSON',
                '天氣觀測報告': 'https://opendata.cwa.gov.tw/fileapi/v1/opendataapi/O-A0003-001?Authorization=CWB-AFCD05A4-A82B-452D-A0C0-3434C0A7B30D&downloadType=WEB&format=JSON',
                '雨量觀測資料': 'https://opendata.cwa.gov.tw/fileapi/v1/opendataapi/O-A0002-001?Authorization=CWB-AFCD05A4-A82B-452D-A0C0-3434C0A7B30D&downloadType=WEB&format=JSON',
            };

            if (this.selectedDataType in apiUrl) {
                this.fetchWeatherData(apiUrl[this.selectedDataType]);
            }
        },
        getUnit(key) {
            const unitMap = {
                '氣溫': '°C',
                '相對濕度': '%',
                '氣壓': 'hPa',
                '風速': 'm/s',
                '雨量': 'mm',
                '過去10分鐘累積雨量': 'mm',
                '過去1小時累積雨量': 'mm',
                '過去3小時累積雨量': 'mm',
                '過去6小時累積雨量': 'mm',
                '過去12小時累積雨量': 'mm',
                '過去24小時累積雨量': 'mm',
                '過去2天累積雨量': 'mm',
                '過去3天累積雨量': 'mm',
                '今日最高': '°C',
                '今日最低': '°C',
                '風向': '°',
            };
            return unitMap[key] || '';
        },
        fetchWeatherData(api) {
            fetch(api)
                .then(response => response.json())
                .then(data => {
                    this.weatherData = data;
                    this.counties = [
                        '基隆市', '臺北市', '新北市', '桃園市', '新竹市', '新竹縣', '苗栗縣', '臺中市', '彰化縣', '南投縣',
                        '雲林縣', '嘉義市', '嘉義縣', '臺南市', '高雄市', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '澎湖縣',
                        '金門縣', '連江縣'
                    ];
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
                    const observationTime = new Date(selectedStation.ObsTime.DateTime);
                    const formattedObservationTime = this.formatDateTime(observationTime);
                    const formattedObservationDate = this.formatDateDate(observationTime);
                    if (this.selectedDataType === '氣象觀測資料' || this.selectedDataType === '天氣觀測報告') {
                        // 格式化日期時間為 YYYY-MM-DD HH:mm:ss
                        

                        weatherData = {
                            日期: formattedObservationDate,
                            時間: formattedObservationTime,
                            天氣: selectedStation.WeatherElement.Weather,
                            氣溫: selectedStation.WeatherElement.AirTemperature,
                            相對濕度: selectedStation.WeatherElement.RelativeHumidity,
                            氣壓: selectedStation.WeatherElement.AirPressure,
                            風向: selectedStation.WeatherElement.WindDirection,
                            風速: selectedStation.WeatherElement.WindSpeed,
                            今日最高: selectedStation.WeatherElement.DailyExtreme.DailyHigh.TemperatureInfo.AirTemperature,
                            今日最低: selectedStation.WeatherElement.DailyExtreme.DailyLow.TemperatureInfo.AirTemperature,
                        };
                    } else if (this.selectedDataType === '雨量觀測資料' && selectedStation.RainfallElement) {
                        weatherData = {
                            '日期': formattedObservationDate,
                            '時間': formattedObservationTime,
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
        },
        formatDateTime(date) {
            const hours = this.padZero(date.getHours());
            const minutes = this.padZero(date.getMinutes());
            const seconds = this.padZero(date.getSeconds());
            return `${hours}:${minutes}:${seconds}`;
        },
        formatDateDate(date) {
            const year = date.getFullYear();
            const month = this.padZero(date.getMonth() + 1);
            const day = this.padZero(date.getDate());
            
            return `${year}/${month}/${day}`;
        },
        padZero(num) {
            return num < 10 ? '0' + num : num;
        },

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