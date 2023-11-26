const questions = [
    {
        question: "請問除了太陽之外距離明倫高中最近的恆星是？",
        options: ["南門二","半人馬座α星C","天狼星","參宿四"],
        correct_answer: 1
    },
    {
        question: "哪個是關愛弱勢群體的標語？",
        options: ["流動的是人口，不變的是服務","尊重每個人，追求和平與協作","遵守速限，保持安全","超速等於超危險"],
        correct_answer: 1
    },
    {
        question: "明倫是民國幾年建校？",
        options: ["68","71","75","57"],
        correct_answer: 3
    },
    {
        question: "明倫原先是國中，之後改制為明倫高級中學。請問是幾年改制並停招國中生？",
        options: ["82","71","91","90"],
        correct_answer: 0
    },
    {
        question: "明倫校旗上有什麼圖形？",
        options: ["三角形","圓形","正方形","菱形"],
        correct_answer: 1
    },
    {
        question: "明倫高中位於哪個城市？",
        options: ["台北市", "高雄市", "台中市", "新北市"],
        correct_answer: 0
    },
    {
        question: "明倫校歌裡有什麼？",
        options: ["努力向前跑", "努力前進", "跑不動", "跳起來"],
        correct_answer: 1
    },
    {
        question: "這所學校的校徽有什麼顏色的？",
        options: ["紅色和白色", "藍色和金色", "綠色和紫色", "黑色和灰色"],
        correct_answer: 0
    },
    {
        question: "明倫高中附近沒有什麼？",
        options: ["紅茶屋", "明倫蛋餅", "孔廟", "學務處"],
        correct_answer: 1
    },
    {
        question: "哪個不是明倫高中校內的建築？",
        options: ["志道樓", "仁義園", "伊甸園", "據德樓"],
        correct_answer: 2
    },
    {
        question: "明倫高中是否擁有一個特別的傳統節慶？",
        options: ["是，元宵節慶", "否，沒有特別的節慶", "是，聖誕節慶", "是，校慶活動",],
        correct_answer: 3
    },
    {
        question: "哪種行為最能表達對弱勢群體的關懷？",
        options: ["提供經濟援助", "主動聆聽他們的故事", "分享有關他們的信息在社交媒體上", "忽略他們的需求"],
        correct_answer: 1
    },
    {
        question: "在幫助弱勢群體時，你應該選擇的方法是？",
        options: ["直接參與志願服務", "以慈善機構捐款", "討論他們的需求", "不關心他們的處境"],
        correct_answer: 0
    },
    {
        question: "什麼是「無家可歸」？",
        options: ["一種極端貧困", "一種疾病", "無固定住處的人們", "地震造成的破壞"],
        correct_answer: 2
    },
    {
        question: "哪個行為最能幫助兒童接受教育，特別是那些生活在貧困地區的兒童？",
        options: ["提供教科書", "提供午餐", "提供遊戲玩具", "無需幫助"],
        correct_answer: 1
    },
    {
        question: "什麼是「社會排斥」？",
        options: ["推動社會變革的運動", "把人們排除在社交圈之外", "經濟增長", "高度社交互動"],
        correct_answer: 1
    },
    {
        question: "翩若驚鴻，婉若游龍，榮曜秋菊，華茂春鬆。出自於下列何者？",
        options: ["赤壁賦", "出師表", "浮生六記", "洛神賦"],
        correct_answer: 3
    },
    {
        question: "臺灣哪個地名,如同新竹市與新竹縣類似,同時作為市名與縣名的稱謂?",
        options: ['臺北' ,'臺南' ,'高雄','嘉義'],
        correct_answer: 3
    },
    {
        question: "臺灣內灣線鐵路的興築,與下列哪項資源開發的關係最密切?",
        options: ["水泥", "金礦", "紅樹林","總督府"],
        correct_answer: 0
    },
    {
        question: "「買」姓是西拉雅族的特有姓氏,這些買姓族人的祖先,在18世紀時期最可能以下列哪個地區為主要活動範圍?",
        options: ["海岸山脈東側", "雪山山脈西側", "玉山山脈東側","阿里山山脈西側"],
        correct_answer: 3
    },
    {
        question: "近年來,在基隆市和平島挖掘到一處教堂的考古遺址,可證明 17 世紀西方在臺灣傳教的證據。這個宗教最可能為下列何者?",
        options: ["猶太教", "天主教", "基督新教","英國國教"],
        correct_answer: 1
    },
    {
        question: "某人想開一家以在地新鮮水果為主要商品的飲料店,品項包含「蓮霧金萱茶」與「蜂蜜檸檬」。他最適合到下列哪些水果原產地購買材料?",
        options: ["屏東的林邊和九如", "臺南的關廟和玉井", "臺中的新社和東勢","臺東的金峰和太麻里"],
        correct_answer: 0
    },
    {
        question: "2023 年 3 月,宏都拉斯宣布與我國斷交,該國位於哪個大洲?",
        options: ["亞洲", "非洲", "中美洲","大洋洲"],
        correct_answer: 2
    },
    {
        question: "2022 年,中國曾與大洋洲的哪個國家簽署安全協議?",
        options: ["關島", "大溪地", "夏威夷","索羅門群島"],
        correct_answer: 3
    },
    {
        question: "JR 東日本傾出全力打造的豪華郵輪式列車,最近五月份的行程為「東京出發,一路行經函館-白老-青森-鳴子溫泉周遊一圈,最後回到東京」。該列車行經下列哪些島嶼?",
        options: ["九州、四國", "四國、本州", "九州、北海道","本州、北海道"],
        correct_answer: 3
    },
    {
        question: "某外國節目舉辦荒野求生競賽活動,安排在 11 月的溫哥華島進行。選手們在島上最可能遭遇下列哪種環境,使得在尋找生活資源時變得益加困難?",
        options: ["綿延數日的風雨", "面積廣大的鹽湖", "四處覓食的獅子","終年不退的積雪"],
        correct_answer: 0
    },
    {
        question: "有學者懷疑,中國商朝曾經抵達過美洲阿留申群島狩獵,或是進行貿易。會有此推論,最可能是在河南殷墟中發現哪種動物的骨頭?",
        options: ["烏龜", "老虎", "鯨魚","大象"],
        correct_answer: 2
    },
    {
        question: "臺灣中油公司在高雄市、臺中市及新北市皆設有油輪專用碼頭,以利將進口的原油運輸至旗下石化工廠進行煉製,並生產如乙烯、丙烯、丁二烯、苯、甲苯、二甲苯等石化原料,提供國內各產業所需。依據上述,該公司在國內設置石化工廠,最可能是考量下列哪個工業區位?",
        options: ["交通", "勞力", "市場","動力"],
        correct_answer: 2
    },
    {
        question: "某個地區的三個國家,打算建立「鋰佩克」(Lithium OPEC)組織,目的是組成類似石油輸出國組織(OPEC)的機構,來決定國際的鋰金屬價格。這個大洲最可能是下列何者?",
        options: ["西亞", "南歐", "北美洲","南美洲"],
        correct_answer: 3
    },
    {
        question: "捷克致力於發展再生能源發電系統,根據該國自然環境判斷,下列何者最可能是捷克採行的再生能源發電策略?",
        options: ["利用阿爾卑斯山地勢落差的水力發電", "利用終年盛行西風發展離岸風力發電", "利用夏日日照較長發展太陽光能發電","利用當地盛產甘蔗發展生質燃料發電"],
        correct_answer: 2
    },
    {
        question: "臺 9 線 420 K 的里程牌,因為與「就是愛你」的發音相近,成為許多人前往打卡的地點。但因為蘇花改的興建,原道路里程縮短,該路牌最可能出現下列何種變動結果?",
        options: ["由北往南移動", "由南往北移動", "由西往東移動","由東往西移動"],
        correct_answer: 0
    },
    {
        question: "清康熙三十六年(1697)郁永河來臺採硫磺,事後寫了《裨海紀遊》一書,其中有段記載的大意是:「二十五日,買小船登岸,越靠近岸邊水越淺,小船反覆無法前進,只好換牛車,從淺水中拉著牛車抵達岸邊。」該地最可能指的是下列何處?",
        options: ["斷層海岸", "谷灣海岸", "洲潟海岸","珊瑚礁海岸"],
        correct_answer: 2
    },
    {
        question: "2022 年 3 月底,臺北市人口跌破 250 萬,這將直接影響年底的選舉,例如松山信義區的議員席次將從 10 席降至 9 席。該都市人口減少的原因,與下列哪個因素最為相關?",
        options: ["出生率下降", "扶養比過高", "通勤人口減少","房價地價太高"],
        correct_answer: 3
    },
    {
        question: "金門「毋忘在莒」的石碑上,「毋忘在莒」四個字主要是源於下列哪個歷史事件?",
        options: ["戰國時代齊國田單以寡敵眾對抗外敵", "唐代末期將領王審知入福建建立閩國", "明末時期鄭成功誓言滅敵以返回故土","民國時代在八二三砲戰擊退中國部隊"],
        correct_answer: 0
    },
    {
        question: "下列何者是世界上唯一橫跨南北半球和東西半球的國家?",
        options: ["吉里巴斯", "多明尼加", "薩爾瓦多","布吉納法索"],
        correct_answer: 0
    },
    {
        question: "赤道穿越「甲」國北部,其國名即西班牙語「赤道」之意,而有「赤道之國」之稱。「甲」國是下列何者?",
        options: ["加彭", "厄瓜多", "烏干達","聖多美普林西比"],
        correct_answer: 1
    },
    {
        question: "在 2013 年底至 2014 年初,烏克蘭曾打算與歐盟簽署協定,雖然並未談成,但卻引發國內親歐與親俄兩派的衝突,導致政治動盪不安。烏克蘭當年想與歐盟簽署協定,最可能是為了要達到下列哪項目的?",
        options: ["國內天然氣供應得以不虞匱乏", "順利加入國協組織以擴大市場", "透過金錢援助以改善國內經濟","獲得黑海的出海口以發展航運"],
        correct_answer: 2
    },
    
    

];


