const productListBath = [
  {
    id: "b01",
    name_eng: "Wild Bluebell Body & Hand Wash",
    name_ko: "라임 바질 앤 만다린 샴푸",
    price: 52000,
    src: process.env.PUBLIC_URL+"/images/bath_01.png",
    gift: "<시그니처 박스에 정성스럽게 포장해 드립니다.>",
    scent: "모발의 균형을 찾아주는 라임 바질 앤 만다린 샴푸로 당신의 데일리 루틴을 완성해보세요. 프로 비타민 B5과 자연에서 찾은 세정 성분이 함유된 포뮬러가 풍성한 거품을 생성하며 모발을 세정하고 정화해줍니다. 매력적이면서도 풍미 넘치는 향을 모발에 은은하게 남겨보세요."
  },
  {
    id: "b02",
    name_eng: "Lime Basil & Mandarin Conditioner",
    name_ko: "라임 바질 앤 만다린 컨디셔너",
    price: 52000,
    src: process.env.PUBLIC_URL+"/images/bath_02.png",
    gift: "<시그니처 박스에 정성스럽게 포장해 드립니다.>",
    scent: "모발을 건강하게 지켜주는 라임 바질 앤 만다린 컨디셔너로 당신의 데일리 루틴을 완성해보세요. 프로 비타민 Bs 가 함유된 포뮬러는 매일 사용 가능하며, 피부에 실크같은 매끈함과 윤광을 더해줍니다. 매력적이면서도 풍미 넘치는 향을 모발에 은은하게 남겨보세요."
  },
  {
    id: "b03",
    name_eng: "Red Roses Bath Oil",
    name_ko: "레드 로즈 배스 오일",
    price: 105000,
    src: process.env.PUBLIC_URL+"/images/bath_03.png",
    gift: "<시그니처 박스에 정성스럽게 포장해 드립니다.>",
    scent: "풍요로운 레드 로즈 배스 오일로 당신의 데일리 루틴을 완성해 보세요. 스위트 아몬드와 호호바 오일이 함유된 포뮬러가 밀키한 거품을 생성하며 피부를 향기롭고 부드럽게 가꿔줍니다. 로맨틱한 플로랄 프레그런스로 배스룸을 가득 채워보세요."
  },
  {
    id: "b04",
    name_eng: "Lime Basil & Mandarin Bath Oilr",
    name_ko: "라임 바질 앤 만다린 배스 오일",
    price: 105000,
    src: process.env.PUBLIC_URL+"/images/bath_04.png",
    gift: "<시그니처 박스에 정성스럽게 포장해 드립니다.>",
    scent: "풍요로운 라임 바질 앤 만다린 배스 오일로 당신의 데일리 루틴을 완성해 보세요. 스위트 아몬드와 호호바 오일이 함유된 포뮬러가 밀키한 거품을 생성하며 피부를 향기롭고 부드럽게 가꿔줍니다. 매력적이고 풍미 넘치는 프레그런스로 배스룸을 가득 채워보세요."
  },
  {
    id: "b05",
    name_eng: "Red Roses Body & Hand Wash",
    name_ko: "레드 로즈 바디 앤 핸드 워시",
    price: 75000,
    src: process.env.PUBLIC_URL+"/images/bath_05.png",
    gift: "<시그니처 박스에 정성스럽게 포장해 드립니다.>",
    scent: "기분 좋은 레드 로즈 바디 앤 핸드 워시로 당신의 데일리 루틴을 완성해보세요. 글리세린과 메도우폼 씨드 오일이 함유된 포뮬러가 벨벳처럼 부드러운 거품을 내며, 피부를 클렌징해주고 깨끗하게 만들어 줍니다. 로맨틱한 플로랄 향을 피부에 은은하게 남겨보세요."
  },
  {
    id: "b06",
    name_eng: "Orange Blossom Body & Hand Wash",
    name_ko: "오렌지 블로썸 바디 앤 핸드 워시",
    price: 75000,
    src: process.env.PUBLIC_URL+"/images/bath_06.png",
    gift: "<시그니처 박스에 정성스럽게 포장해 드립니다.>",
    scent: "기분 좋은 오렌지 블로썸 바디 앤 핸드 워시로 당신의 데일리 루틴을 완성해보세요. 글리세린과 메도우폼 씨드 오일이 함유된 포뮬러가 벨벳처럼 부드러운 거품을 내며, 피부를 클렌징해주고 깨끗하게 만들어 줍니다. 반짝이듯 빛나며 만발하는 향을 피부에 은은하게 남겨보세요."
  },
  {
    id: "b07",
    name_eng: "Pomegranate Noir Soap",
    name_ko: "포머그래니트 누와 솝",
    price: 38000,
    src: process.env.PUBLIC_URL+"/images/bath_07.png",
    gift: "<시그니처 박스에 정성스럽게 포장해 드립니다.>",
    scent: "새틴처럼 부드러운 포머그래니트 누와 솝으로 당신의 데일리 루틴을 완성해보세요. 시어 버터와 비타민 E가 함유된 포뮬러가 크리미한 거품을 생성하며 피부를 세정하고 컨디셔닝해줍니다. 강렬하면서도 매혹적인 향을 피부에 은은하게 남겨보세요."
  },
  {
    id: "b08",
    name_eng: "Lime Basil & Mandarin Soap",
    name_ko: "라임 바질 앤 만다린 솝",
    price: 38000,
    src: process.env.PUBLIC_URL+"/images/bath_08.png",
    gift: "<시그니처 박스에 정성스럽게 포장해 드립니다.>",
    scent: "새틴처럼 부드러운 라임 바질 앤 만다린 솝으로 당신의 데일리 루틴을 완성해보세요. 시어 버터와 비타민 E가 함유된 포뮬러가 크리미한 거품을 생성하며 피부를 세정하고 컨디셔닝해줍니다. 매력적이면서도 풍미 넘치는 향을 피부에 은은하게 남겨보세요."
  }
]
  
export default productListBath