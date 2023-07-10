const productList = [
  {
    id: "p01",
    name_eng: "Blackberry & Bay Cologne",
    name_ko: "블랙베이 앤 베이 코롱",
    price: 218000,
    src: process.env.PUBLIC_URL+"/images/sub_item01.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "순수의 향. 블랙베리를 따던 어린 시절의 추억, 블랙베리로 물든 입술과 손. 이제 막 수확한 월계수 잎의 신선함에 톡 쏘는 블랙베리 과즙을 가미하였습니다. 매력적이고 생기 넘치는 상쾌한 느낌의 향입니다."
  },
  {
    id: "p02",
    name_eng: "Lime Basil & Mandarin Cologne",
    name_ko: "라임 바질 앤 만다린 코롱",
    price: 218000,
    src: process.env.PUBLIC_URL+"/images/sub_item02.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "조 말론 런던의 시그니처 향. 카리브해의 산들바람에서 실려온 듯한 라임향에 톡 쏘는 바질과 향기로운 백리향이 더해져 독특한 조합을 만들어 냅니다. 현대적인 감각의 클래식한 향입니다."
  },
  {
    id: "p03",
    name_eng: "Wood Sage & Sea Salt Cologne",
    name_ko: "우드 세이지 앤 씨 솔트 코롱",
    price: 218000,
    src: process.env.PUBLIC_URL+"/images/sub_item03.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "바람부는 해안을 따라 걸으며 일상을 벗어나보세요. 하얗게 부서지는 파도, 소금기를 머금은 신선한 바다 공기. 험준한 절벽에서 느껴지는 투박한 자연의 향기와 세이지의 우디한 흙 내음이 어우러져 자유롭고 활기찬 에너지와 즐거움이 가득합니다."
  },
  {
    id: "p04",
    name_eng: "Star Magnolia Cologne",
    name_ko: "스타 매그놀리아 코롱",
    price: 225000,
    src: process.env.PUBLIC_URL+"/images/sub_item04.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "블로썸 컬렉션. 봄은 반짝이는 꽃나무들이 공기를 향으로 가득 채우기 시작하며 다가옵니다. 바로 스타 매그놀리아가 피어나는 순간입니다. 에메랄드빛의 이파리 사이로 부드럽고 크리미한 샌달우드 베이스와 산뜻하고 깨끗한 목련 꽃잎들이 반짝입니다."
  },
  {
    id: "p05",
    name_eng: "Nashi Blossom Cologne",
    name_ko: "나시 블로썸 코롱",
    price: 225000,
    src: process.env.PUBLIC_URL+"/images/sub_item05.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "블로썸 컬렉션. 봄이 깨어나면 배나무에서 배꽃도 피어납니다. 순수의 상징. 새하얀 블라우스 같은 꽃잎들이 작은 도트 무늬처럼 모여 꽃송이를 이룹니다. 배나무에서 뻗어 나간 휘어진 나뭇가지. 그 가지를 따라 피어난 꽃송이들은 곧 한껏 과즙을 머금은 배가 되어 맺힙니다. 과일향이 더해진 빛나는 배꽃의 장난스러운 향기는 장미 꽃잎과 함께 화이트 머스크가 폭 감싸줍니다."
  },
  {
    id: "p06",
    name_eng: "Waterlily Cologne",
    name_ko: "워터릴리 코롱",
    price: 225000,
    src: process.env.PUBLIC_URL+"/images/sub_item06.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "블로썸 컬렉션. 비밀 정원 속 수정같이 맑은 연못. 그 속에서 발견한 보석 왕관처럼 빛나는 수련, 워터릴리. 이 하얀 꽃잎들로부터 감동과매혹을 불러일으키는 깨끗한 플로랄 향이 흘러나옵니다. 깨달음을 상징하는 워터릴리. 연못 위에 고요히 피어난 물기 어린신선함이 화려한 자스민 삼박과 네롤리를 만나 더욱 돋보입니다."
  },
  {
    id: "p07",
    name_eng: "Special-Edition Red Roses Cologne",
    name_ko: "스페셜 에디션 레드 로즈 코롱",
    price: 160000,
    src: process.env.PUBLIC_URL+"/images/sub_item07.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "셀러브레이팅 더 로즈, 장미 향에 찬사를 바치는 컬렉션. 현대적인 로맨스의 상징. 바이올렛 잎과 약간의 레몬이 어우러져 정원에서 갓 따온 장미 부케의 향이 은은하게 펼쳐집니다."
  },
  {
    id: "p08",
    name_eng: "Rose Water & Vanilla Cologne",
    name_ko: "로즈 워터 앤 바닐라 코롱",
    price: 160000,
    src: process.env.PUBLIC_URL+"/images/sub_item08.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "셀러브레이팅 더 로즈, 장미 향에 찬사를 바치는 컬렉션. 기분이 좋아지는 장미의 향을 함께 나누고 만끽해 보세요. 로즈 워터와 심신을 안정시켜주는 바닐라가 달콤한 터키식 전통 사탕의 향으로 더욱 풍성한 향을 완성합니다. 크리미하면서도 계속 끌리는 향."
  },
  {
    id: "p09",
    name_eng: "Rose Blush Colognee",
    name_ko: "로즈 블러쉬 코롱",
    price: 160000,
    src: process.env.PUBLIC_URL+"/images/sub_item09.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "셀러브레이팅 더 로즈, 장미 향에 찬사를 바치는 컬렉션. 달콤한 젤리 속에 담긴 섬세한 장미 꽃잎. 붉게 물든 꽃잎의 매력이 영국의 성대한 여름 축제를 위해 정성스럽게 만든 잼에 영감이 되어줍니다. 생기 넘치는 바질과 과즙이 가득한 리치 향이 부드러운 플로랄 향에 모던한 느낌을 가미해주고 화이트 머스크가 편안하게 전체 향을 감싸줍니다."
  },
  {
    id: "p10",
    name_eng: "The Golden & Sweet Duo",
    name_ko: "더 골든 앤 스윗 듀오",
    price: 220000,
    src: process.env.PUBLIC_URL+"/images/sub_item10.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "이제 막 익은 배의 신선함과 아카시아 꿀 향기의 달콤하고 경쾌한 조합을 만나보세요. 두 가지의 프루티 코롱으로 구성된 세트 상품입니다. 화이트 프리지아 부케향에 이제 막 익은 배의 신선함을 입히고 호박, 파출리, 우디향으로 은은함을 더한 잉글리쉬 페어 앤 프리지아와 아카시아 꿀 향기 속에 천도 복숭아, 복숭아, 카씨스와 어린 봄꽃의 향이 녹아있는 넥타린 블로썸 앤 허니의 센트 페어링을 경험해 보세요."
  },
  {
    id: "p11",
    name_eng: "Spirited & Addictive Duo",
    name_ko: "스피릿 앤 에딕티드 듀오",
    price: 220000,
    src: process.env.PUBLIC_URL+"/images/sub_item11.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "카리브해의 산들바람을 맞은 라임에서 영감을 얻은 시트러스와 투박한 자연의 향기와 세이지의 우디한 흙 내음이 어우러진 자유롭고 활기찬 에너지를 만나보세요. 시트러스와 우디한 코롱으로 구성된 세트 상품입니다. 라임향에 톡 쏘는 바질과 향기로운 백리향이 더해져 독특한 조합의 라임 바질 앤 만다린과 하얗게 부서지는 파도, 소금기를 머금은 신선한 바다 공기를 연상시키는 우드 세이지 앤 씨 솔트의 센트 페어링을 경험해 보세요."
  },
  {
    id: "p12",
    name_eng: "Fruity & Sweet Duo",
    name_ko: "프루티 앤 스윗 듀오",
    price: 220000,
    src: process.env.PUBLIC_URL+"/images/sub_item12.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "매력적이고 생기 넘치는 상쾌한 느낌의 블랙베리 앤 베이와 이제 막 익은 배의 신선함과 아카시아 꿀 향기의 달콤하고 경쾌한 조합을 만나보세요. 두 가지의 프루티 코롱으로 구성된 세트 상품입니다. 이제 막 수확한 월계수 잎의 신선함에 톡 쏘는 블랙베리 과즙과 화이트 프리지아 부케향에 이제 막 익은 배의 신선함을 입히고 호박, 파출리, 우디향으로 은은함을 더한 잉글리쉬 페어 앤 프리지아의 센트 페어링을 경험해 보세요."
  },
  {
    id: "p13",
    name_eng: "Wild Achillea Cologne",
    name_ko: "와일드 아킬리아 코롱",
    price: 116000,
    src: process.env.PUBLIC_URL+"/images/sub_item13.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "하일랜드 컬렉션. 자연 속의 고독한 폐허를 감싸 안는 황금빛 다발, 와일드 아킬리아. 명랑한 베르가못과 톡 쏘는 듯이 새콤한 네틀의 향이 어우러져 청량감을 주며, 부드러운 화이트 머스크 베이스로 균형 잡힌 푸르름을 선사합니다."
  },
  {
    id: "p14",
    name_eng: "Melancholy Thistle Cologne",
    name_ko: "멜랑콜리 티슬 코롱",
    price: 116000,
    src: process.env.PUBLIC_URL+"/images/sub_item14.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "하일랜드 컬렉션. 스코틀랜드 하일랜드의 잊혀진 고대 성을 지키고 있는 대담하고 용감한 멜랑콜리 티슬. 그린 노트의 신선함이 더해진 아로마틱 우디한 향이 차가운 나무 내음과 어우러져 담쟁이 덩굴로 뒤덮인 성 안의 웅장한 돌담을 떠올리게 합니다."
  },
  {
    id: "p15",
    name_eng: "Mallow On The Moor Colgne",
    name_ko: "말로우 온 더 무어 코롱",
    price: 116000,
    src: process.env.PUBLIC_URL+"/images/sub_item15.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "하일랜드 컬렉션. 들판 위, 무성하게 자라나는 말로우 꽃이 선명한 보랏빛으로 꿀벌에게 손짓합니다. 헬리오트로프와 함께 흩날리는 어여쁜 말로우 꽃잎에 바이올렛 잎이 자연스러움을 더하며 부드러운 플로랄 향이 퍼져나갑니다."
  },
  {
    id: "p16",
    name_eng: "Earl Grey & Cucumber Cologne",
    name_ko: "얼 그레이 앤 큐컴버 코롱",
    price: 218000,
    src: process.env.PUBLIC_URL+"/images/sub_item16.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "영국의 전통인 애프터눈 티. 얼 그레이 티에 프루티 아로마 향을 더욱 강조해주는 베르가못과 시원한 오이의 향을 더했습니다. 비즈왁스와 바닐라의 베이스가 달콤함을 가져다 줍니다."
  },
  {
    id: "p17",
    name_eng: "Red Roses Cologne",
    name_ko: "레드 로즈 코롱",
    price: 218000,
    src: process.env.PUBLIC_URL+"/images/sub_item17.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "현대적인 로맨스의 상징. 세상에서 가장 아름다운 일곱가지 장미가 조합된 관능적인 향입니다. 으깬 바이올렛 잎과 약간의 레몬이 조합되어 신선한 부케향을 발산합니다. 놀라울 정도로 투명하고 순수한 향을 선사합니다."
  },
  {
    id: "p18",
    name_eng: "Honeysuckle & Davana Cologne",
    name_ko: "허니서클 앤 다바나 코롱",
    price: 218000,
    src: process.env.PUBLIC_URL+"/images/sub_item18.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "영국 전원 지대에 물결치듯이 피어 오르는 야생 허니서클은 휘감듯이 피어 오르며 어둠이 깔리면 더욱 매력적으로 빛납니다. 과일 향의 반전을 지닌 다바나의 아로마 향, 여기에 로즈 향이 가미되어 더욱 신선해 집니다. 모스는 향에 우디함을 더해 줍니다. 햇살을 담아 따뜻해진 향. 선명하고 화사한 행복감을 표현하는 향입니다."
  },
  {
    id: "p19",
    name_eng: "Gardenia & Oud Absolu",
    name_ko: "가드니아 앤 오드 앱솔뤼",
    price: 458000,
    src: process.env.PUBLIC_URL+"/images/sub_item19.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "새하얗게 빛나며 아라비아 사막 깊은 곳까지 생기를 불어넣는 가드니아. 따스한 플로랄 향이 관능적인 오드, 따뜻한 앰버와 어우러져 반전 있는 매력을 선사합니다. 부드러운 화이트 머스크 향으로 마무리되어 매혹적인 느낌을 더합니다."
  },
  {
    id: "p20",
    name_eng: "Violet & Amber Absolu",
    name_ko: "바이올렛 앤 앰버 앱솔뤼",
    price: 458000,
    src: process.env.PUBLIC_URL+"/images/sub_item20.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "아라비아의 깊은 밤, 신비로움을 간직한 여린 바이올렛이 피어납니다. 영국식 정원에서도 사랑 받는 바이올렛은 짙은 보라색 꽃잎만큼 은밀하고도 은은한 향을 남깁니다. 따뜻하고 세련된 느낌의 앰버와 더해져 오드와 화이트 머스크 노트를 감싸며 마무리 됩니다."
  },
  {
    id: "p21",
    name_eng: "Moonlit Camomile Cologne",
    name_ko: "문릿 캐모마일 코롱",
    price: 218000,
    src: process.env.PUBLIC_URL+"/images/sub_item21.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "나이트 컬렉션. 기회로 가득한 저녁 산책. 매혹적인 산뜻함을 지닌 깃털같은 잉글리쉬 캐모마일 잎과, 어둠이 깔린 후의 정원 사이로 보이는 푸른 문플라워가 어렴풋이 드리워집니다. 화이트 머스크의 부드러운 관능미로 감싸안아 줍니다."
  },
  {
    id: "p22",
    name_eng: "Men's Cologne Collection",
    name_ko: "맨즈 코롱 컬렉션",
    price: 183000,
    src: process.env.PUBLIC_URL+"/images/sub_item22.png",
    gift: "<기프트 박스 포장>",
    scent: "여행용 사이즈로, 단독 혹은 함께 페어링할 수 있는 조 말론 런던의 다섯가지 프레그런스(9ml)를 만나보세요.특별한 이에게 기분 좋은 서프라이즈가 되거나 자신을 위한 선물로 간직할 수 있도록 기프트 박스에 포장됩니다."
  },
  {
    id: "p23",
    name_eng: "Cologne Collection",
    name_ko: "코롱 컬렉션",
    price: 162000,
    src: process.env.PUBLIC_URL+"/images/sub_item23.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "여행용 사이즈로, 단독 혹은 함께 페어링할 수 있는 조 말론 런던의 다섯가지 프레그런스(9ml)을 만나보세요. 특별한 이에게 기분 좋은 서프라이즈가 되거나 자신을 위한 선물로 간직할 수 있도록 기프트 박스에 포장됩니다."
  },
  {
    id: "p24",
    name_eng: "Cologne Intense Collection",
    name_ko: "코롱 인텐스 컬렉션",
    price: 227000,
    src: process.env.PUBLIC_URL+"/images/sub_item24.png",
    gift: "<기프트 박스 포장>",
    scent: "세계 곳곳의 진귀한 재료에서 영감을 받은 조 말론 런던의 향과 함께 모험을 떠나보세요. 단독 혹은 함께 페어링 할 수 있는 다섯가지의 코롱 인텐스 9ml로 구성됩니다. 특별한 이에게 기분 좋은 서프라이즈가 되거나 자신을 위한 선물로 간직할 수 있도록 기프트 박스에 포장됩니다."
  },
  {
    id: "p25",
    name_eng: "Redcurrant & Cream Cologne",
    name_ko: "레드커런트 앤 크림 코롱",
    price: 218000,
    src: process.env.PUBLIC_URL+"/images/sub_item25.png",
    gift: "<온라인 단독, 전용 슬리브 포장>",
    scent: "여름날의 푸딩. 선명한 진홍색의 과즙이 가득한 레드커런트, 싱싱한 딸기와 라즈베리가 크리미한 머스크향 사이로 풍성함을 더해줍니다. 생명력이 넘치는 매혹적인 향. 2012년 아카이브 컬렉션에서 선보인 향으로, 오직 온라인 부티크에서만 단독으로 만나보실 수 있습니다."
  },
  {
    id: "p26",
    name_eng: "Hemlock & Bergamot Cologne",
    name_ko: "햄록 앤 베르가못 코롱",
    price: 218000,
    src: process.env.PUBLIC_URL+"/images/sub_item26.png",
    gift: "<온라인 단독, 전용 슬리브 포장>",
    scent: "햄록의 파우더리한 꽃잎에 베르가못이 더해져 한층 더 밝은 느낌을 선사합니다. 치명적이면서도 뜻밖의 섬세함을 보여주는 야생화. 2019년 아카이브 컬렉션에서 선보인 향으로, 오직 온라인 부티크에서만 단독으로 만나보실 수 있습니다."
  },
  {
    id: "p27",
    name_eng: "Wisteria & Lavender Cologne",
    name_ko: "위스테리아 앤 라벤더 코롱",
    price: 218000,
    src: process.env.PUBLIC_URL+"/images/sub_item27.png",
    gift: "<온라인 단독, 전용 슬리브 포장>",
    scent: "폭포처럼 쏟아지는 위스테리아로 둘러싸인 영국식 주택은 보랏빛 풍경에 대한 향수를 자아냅니다. 잉글리시 라벤더가 지닌 부드러운 플로랄 향에 달콤한 위스테리아 그리고 파우더리한 헬리오트로프가 가미되었습니다. 마치 그림같은 세 가지 향을 감싸는 깨끗하고 섬세한 화이트 머스크가 목가적이면서 아기자기한 느낌을 더해줍니다. 2020년 아카이브 컬렉션에서 선보인 향으로, 오직 온라인 부티크에서만 단독으로 만나보실 수 있습니다."
  },
  {
    id: "p28",
    name_eng: "English Pear & Freesia Scent Pairing Collection",
    name_ko: "잉글리쉬 페어 앤 프리지아 센트 페어링 컬렉션",
    price: 195000,
    src: process.env.PUBLIC_URL+"/images/sub_item28.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "다양한 센트 페어링을 경험할 수 있는 4가지의 프레그런스. 감미로운 잉글리쉬 페어 앤 프리지아 코롱 (30ml)과 세 가지의 미니어처 보틀 (9ml) - 과즙 가득한 블랙베리 앤 베이, 화려한 피오니 앤 블러쉬 스웨이드 그리고 호화로운 벨벳 로즈 앤 오드 향으로 구성됩니다. 서로 다른 향을 레이어링하여 나만의 개성을 표현하는 향을 완성해 보세요."
  },
  {
    id: "p29",
    name_eng: "Wild Bluebell Scent Pairing Collection",
    name_ko: "와일드 블루벨 센트 페어링 컬렉션",
    price: 195000,
    src: process.env.PUBLIC_URL+"/images/sub_item29.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "다양한 센트 페어링을 경험할 수 있는 4가지의 프레그런스. 빛나는 와일드 블루벨 코롱 (30ml)과 세 가지의 미니어처 보틀 (9ml) - 다채로운 포피 앤 바알리, 반짝이는 오렌지 블로썸 그리고 호화로운 튜버로즈 앤 안젤리카 향으로 구성됩니다. 서로 다른 향을 레이어링하여 나만의 개성을 표현하는 향을 완성해 보세요."
  },
  {
    id: "p30",
    name_eng: "Wood Sage & Sea Salt Scent Pairing Collection",
    name_ko: "우드 세이지 앤 씨 솔트 센트 페어링 컬렉션",
    price: 195000,
    src: process.env.PUBLIC_URL+"/images/sub_item30.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "다양한 센트 페어링을 경험할 수 있는 4가지의 프레그런스. 산뜻한 우드 세이지 앤 씨 솔트 코롱 (30ml)과 세 가지의 미니어처 보틀 (9ml) - 풍미 가득한 라임 바질 앤 만다린, 흙내음이 풍기는 잉글리쉬 오크 앤 헤이즐넛 그리고 매혹적인 머르 앤 통카 향으로 구성됩니다. 서로 다른 향을 레이어링하여 나만의 개성을 표현하는 향을 완성해 보세요."
  },
  {
    id: "p31",
    name_eng: "Tuberose Angelica Cologne Intense",
    name_ko: "튜버로즈 안젤리카 코롱 인텐스",
    price: 305000,
    src: process.env.PUBLIC_URL+"/images/sub_item31.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "최면을 거는 듯한 튜버로즈의 꽃망울로 가득 찬 한밤 중의 정원. 우아하게 피어난 튜버로즈의 중독적이고 매혹적인 향과 신선한 안젤리카 향, 앰버의 따뜻함이 어우러졌습니다. 화려하면서도 호화로운 향."
  },
  {
    id: "p32",
    name_eng: "Velvet Rose & Oud Cologne Intense",
    name_ko: "벨벳 로즈 앤 오드 코롱 인텐스",
    price: 305000,
    src: process.env.PUBLIC_URL+"/images/sub_item32.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "다마스크 로즈의 영원한 아름다움과 변화무쌍함에 찬사를 보내는 향. 오드의 깊은 스모키함이 아이코닉한 플로랄 향을 감싸고 정향과 감미로운 프랄린이 빛나는 향을 완성합니다. 자성에 이끌리는 듯한 사치스러운 향."
  },
  {
    id: "p33",
    name_eng: "Myrrh & Tonka Cologne Intense",
    name_ko: "머르 앤 통카 코롱 인텐스",
    price: 305000,
    src: process.env.PUBLIC_URL+"/images/sub_item33.png",
    gift: "<전용 슬리브 포장 & 하트 파우치 증정>",
    scent: "독특한 머르(myrrh) 나무의 서식지는 나미브의 금빛 모래 언덕입니다. 머르 나무의 매혹적인 레진 향이 뜨거운 공기를 따라 퍼지며 통카 빈의 따뜻한 아몬드, 풍성한 바닐라 노트와 어우러집니다. 고급스러우면서 도취시키는 매력의 향."
  },
  {
    id: "p34",
    name_eng: "Double Fruity Duo",
    name_ko: "더블 프루티 듀오",
    price: 62000,
    src: process.env.PUBLIC_URL+"/images/sub_item34.png",
    gift: "<온라인 단독>",
    scent: "휴대하기 좋은 사이즈의 두 가지 코롱을 센트 페어링하여 나만의 시그니처 향을 완성해 보세요. 온라인 부티크 단독으로 트래블 코롱 전용 파우치를 선물로 드립니다. 구성: 잉글리쉬 페어 앤 프리지아 코롱 9ml, 넥타린 블로썸 앤 허니 코롱 9ml"
  },
  {
    id: "p35",
    name_eng: "Fruity & Citrus Duo",
    name_ko: "프루티 앤 시트러스 듀오",
    price: 62000,
    src: process.env.PUBLIC_URL+"/images/sub_item35.png",
    gift: "<온라인 단독>",
    scent: "휴대하기 좋은 사이즈의 두 가지 코롱을 센트 페어링하여 나만의 시그니처 향을 완성해 보세요. 온라인 부티크 단독으로 트래블 코롱 전용 파우치를 선물로 드립니다. 구성: 잉글리쉬 페어 앤 프리지아 코롱 9ml, 라임 바질 앤 만다린 코롱 9ml"
  },
  {
    id: "p36",
    name_eng: "Woody & Honey Duo",
    name_ko: "우디 앤 허니 듀오",
    price: 62000,
    src: process.env.PUBLIC_URL+"/images/sub_item36.png",
    gift: "<온라인 단독>",
    scent: "휴대하기 좋은 사이즈의 두 가지 코롱을 센트 페어링하여 나만의 시그니처 향을 완성해 보세요. 온라인 부티크 단독으로 트래블 코롱 전용 파우치를 선물로 드립니다. 구성: 우드 세이지 앤 씨 솔트 코롱 9ml, 넥타린 블로썸 앤 허니 코롱 9ml"
  }
]
  
export default productList