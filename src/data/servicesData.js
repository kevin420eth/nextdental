import service_1 from '/public/images/service_1.png'
import service_2 from '/public/images/service_2.png'
import service_3 from '/public/images/service_3.png'
import service_4 from '/public/images/service_4.png'
import service_5 from '/public/images/service_5.png'
import service_6 from '/public/images/service_6.png'
import service_7 from '/public/images/service_7.png'
import service_8 from '/public/images/service_8.png'
import service_9 from '/public/images/service_9.png'
import service_10 from '/public/images/service_10.png'

const servicesData = [
    {
        serviceImage: service_1,
        serviceName: "牙齒矯正",
        serviceShortDescription: "牙正人才正",
        serviceLongDescription: "許多患者配戴傳統金屬矯正器時，經常有牙齒酸痛、卡食物殘渣的問題，這是因為牙醫師會將金屬線材穿入矯正器，並以橡皮筋固定金屬線材，讓牙齒被慢慢被拉回正確位置，造成患者在牙齒矯正的過程中，經常有牙齒酸痛的不適感。為了改善傳統矯正器的諸多缺點，晶悅牙醫診所提供專業的自鎖式矯正器，將新一代的金屬線材穿入矯正器後，用滑蓋固定矯正線，讓牙齒沿著矯正線緩慢移動，不僅舒適度較高、清潔死角少、且療程較短，是中壢牙齒矯正的優質新選擇！",
        route: "teethjustify"
    },
    {
        serviceImage: service_2,
        serviceName: "牙齒修復",
        serviceShortDescription: "修理你的牙齒",
        serviceLongDescription: "當牙齒進行根管治療後，牙髓腔便不再有水分與營養，容易造成牙齒顏色改變、牙齒變脆弱等，故患者常需額外自費做假牙，保護受損嚴重的牙齒，避免其斷裂。",
        route: "teethfix"
    },
    {
        serviceImage: service_3,
        serviceName: "全植牙",
        serviceShortDescription: "幫你種幾顆新牙齒",
        serviceLongDescription: "讓晶悅牙醫體系解決您的煩惱！晶悅牙醫體系提供優質的中壢人工植牙療程，由專業醫師為您植入鈦金屬材質的人工牙根（植體），待骨頭與植體密合後，再安裝支台齒及人工牙冠，讓您快速找回自信又迷人的笑容！",
        route: "plant"
    },
    {
        serviceImage: service_4,
        serviceName: "全瓷冠",
        serviceShortDescription: "讓你的牙齒變傳家寶",
        serviceLongDescription: "固定假牙分為金屬牙冠、一般瓷牙與全瓷牙冠，其中金屬牙冠與一般瓷牙皆含金屬成份，若長期裝置於口腔內，可能引起化學變化，造成周圍牙肉變色的問題，影響患者的日常生活。",
        route: "wholemtf"
    },
    {
        serviceImage: service_5,
        serviceName: "牙齒美白",
        serviceShortDescription: "一白遮三醜",
        serviceLongDescription: " 讓晶悅牙醫體系解決您的煩惱！為了讓您擁有自信美麗的笑容，晶悅牙醫體系提供多種專業的牙齒美白療程，如噴砂美白、冷光美白、居家美白等，由專業醫師根據您的口腔狀況及美白需求，評估合適的中壢牙齒美白療程，助您告別黃板牙、讓牙齒變得亮晶晶！",
        route: "teethbeauty"
    },
    {
        serviceImage: service_6,
        serviceName: "兒童牙科",
        serviceShortDescription: "不刷牙長大沒女朋友",
        serviceLongDescription: "晶悅牙醫體系深知許多孩子都有看牙恐懼症，因此特別規劃中壢兒童牙科服務，聘請專業的兒童牙科專科醫師為孩子進行治療，以親切、友善的溝通一步步培養孩子與兒童牙科醫師的信任，再搭配「講解、示範、實際運作」等方式，讓孩子慢慢接受牙齒治療、改善害怕看牙的狀況！",
        route: "kidteeth"
    },
    {
        serviceImage: service_7,
        serviceName: "家庭牙醫",
        serviceShortDescription: "讓我們當你爸爸",
        serviceLongDescription: "包含家庭牙科一般檢查、根管治療、蛀牙補綴、口腔外科、口腔衛生教育、塗氟齲齒預防…等等，常見項目如下：",
        route: "homedentist"
    },
    {
        serviceImage: service_8,
        serviceName: "3D齒雕",
        serviceShortDescription: "讓你笑起來更3D",
        serviceLongDescription: "為了讓中壢地區的居民都能享有完善的蛀牙治療，晶悅牙醫體系提供優質的中壢3D齒雕療程，由專業醫師為患者清理齲齒，挖除牙齒的蛀洞和部分脆弱齒質，並將精細切割製作的瓷塊固定於牙齒上，讓瓷塊與蛀洞密合，降低患者二次蛀牙與牙裂的機率",
        route: "3d"
    },
    {
        serviceImage: service_9,
        serviceName: "顯微根管治療",
        serviceShortDescription: "保證不會痛",
        serviceLongDescription: "為了讓中壢地區的居民享有更加完善的根管治療，晶悅牙醫體系提供顯微根管治療療程，透過先進高階的設備，讓專業醫師在進行根管治療時，能有高倍顯微鏡輔助放大目標牙齒、補充光源，讓醫師更清楚看到患者的齒內狀況，並保留更多齒質",
        route: "root"
    },
    {
        serviceImage: service_10,
        serviceName: "微創牙周水雷射",
        serviceShortDescription: "水雷射殺光你口腔內的細菌",
        serviceLongDescription: "傳統牙周病治療需將感染的牙周組織翻開，透過挖除、清理的手術過程清除深層細菌，傷口範圍較大，患者常在治療期間有疼痛、腫脹甚至發炎感染等問題。而微創牙周水雷射治療，是透過雷射所釋放的能量滅除深層細菌，無需翻開牙周組織，在傷口非常微小的情況下進行治療，術後較無腫脹、疼痛、感染等問題。",
        route: "laser"
    }
]

export default servicesData