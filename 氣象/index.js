const app = new Vue({
    el: '#app',
    data: {
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
        this.fetchWeatherData();
    },
    methods: {
        fetchWeatherData() {
            fetch("https://opendata.cwa.gov.tw/fileapi/v1/opendataapi/O-A0001-001?Authorization=CWB-AFCD05A4-A82B-452D-A0C0-3434C0A7B30D&downloadType=WEB&format=JSON")
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
                const towns = Array.from(new Set(selectedCountyStations.map(station => station.GeoInfo.TownName)));
                const index = towns.indexOf('新莊區');
                if (index !== -1) {
                    towns.splice(index, 1);
                    towns.unshift('新莊區');
                }
                this.towns = towns;
            }
        },
        updateStations() {
            this.stationNames = [];
            if (this.selectedCounty && this.selectedTown) {
                this.stationNames = this.stationNamesByTown[this.selectedTown];
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
                if (selectedStation && selectedStation.WeatherElement) {
                    this.weather = {
                        Weather: selectedStation.WeatherElement.Weather,
                        AirTemperature: selectedStation.WeatherElement.AirTemperature,
                        RelativeHumidity: selectedStation.WeatherElement.RelativeHumidity,
                        AirPressure: selectedStation.WeatherElement.AirPressure,
                        WindSpeed: selectedStation.WeatherElement.WindSpeed,
                        DailyHigh: selectedStation.WeatherElement.DailyExtreme.DailyHigh.TemperatureInfo.AirTemperature,
                        DailyLow: selectedStation.WeatherElement.DailyExtreme.DailyLow.TemperatureInfo.AirTemperature
                    };
                } else {
                    this.weather = null;
                }
            }
        }
    },
    watch: {
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