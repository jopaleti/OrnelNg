var cars = [
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2016%20Mercedes%20Benz%20E300%2F20220114_155018.jpg?alt=media&token=bd1b2610-9e68-4519-a565-f52877683ab7",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2016%20Mercedes%20Benz%20E300%2F20220114_155125.jpg?alt=media&token=6701f62c-b614-4c07-bf7c-b04d8a34fb1b",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2016%20Mercedes%20Benz%20E300%2F20220114_155239.jpg?alt=media&token=a21479a4-60ea-4cb2-b155-ba0e25c138f0",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2019%20Prado%20V6%20%20V4%2F20220114_140346.jpg?alt=media&token=a2552ac9-2524-457b-b73d-a04e49c82aff",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2019%20Prado%20V6%20%20V4%2F20220114_140443.jpg?alt=media&token=e4e23415-d7c5-40ad-9050-2cc707aa01dd",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2019%20Prado%20V6%20%20V4%2F20220114_140600.jpg?alt=media&token=15687a9e-f3d0-450e-8e37-73e90455cdf1",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2020%20Toyota%20Corolla%202.0XLi%2F20200715_141807.jpg?alt=media&token=a7e8aec7-3a68-41be-b514-28e1c2b65835",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2020%20Toyota%20Corolla%202.0XLi%2F20200715_141823.jpg?alt=media&token=cff3a235-ba5a-496b-be8a-79d30c70e3c4",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2020%20Toyota%20Corolla%202.0XLi%2F20200715_141854.jpg?alt=media&token=be4f6879-0f9c-450f-a64c-821ae3117728",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2021Toyota%20Hiace%20Bus%2F20220114_135840.jpg?alt=media&token=c56437a2-4b38-4374-87ce-39a8665886c8",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2021Toyota%20Hiace%20Bus%2F20220114_135917.jpg?alt=media&token=2d434529-0fb5-48a5-8663-72e966f6cc6c",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2021Toyota%20Hiace%20Bus%2F20220114_140123.jpg?alt=media&token=17dc915f-a96c-445d-940e-9a548a84bd2f",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2022%20ESCALADE%2F20220115_095320.jpg?alt=media&token=2612a0a7-7e0b-4985-bbc6-5884338aed66",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2022%20ESCALADE%2F20220115_095408.jpg?alt=media&token=6812499e-9760-4e7d-9847-8b05d51a401b",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2022%20ESCALADE%2F20220115_095538.jpg?alt=media&token=73ca4467-0200-467a-8c92-c60715ab67b3",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2022%20Ferrari%20SF90%20Stradale%2F20220120_175152.jpg?alt=media&token=7f3b0d2e-17c4-4b4a-b689-21e127bbf7da",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2022%20Ferrari%20SF90%20Stradale%2F20220120_175310.jpg?alt=media&token=8ecb2d1f-adad-4485-9530-b985fe4ee694",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2022%20Ferrari%20SF90%20Stradale%2F20220120_175823.jpg?alt=media&token=24fc15ed-02b7-4210-8540-fbf26fd697a5",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2022%20G63%20Bulletproof%2F20220114_155402.jpg?alt=media&token=ec81b558-89f2-4e88-9312-80571f06aa47",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2022%20G63%20Bulletproof%2F20220114_155447.jpg?alt=media&token=6c1ce232-867a-4820-b84f-b389d904344a",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2022%20G63%20Bulletproof%2F20220114_155630.jpg?alt=media&token=8d97a746-c93e-45a8-b4e7-0f6d92adfa85",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2022%20Land%20Cruiser%20Latest%20Edition%2F20220110_125816.jpg?alt=media&token=e0bd32fc-470c-4ab4-a9e3-e730265ed7a5",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2022%20Land%20Cruiser%20Latest%20Edition%2F20220110_125836.jpg?alt=media&token=1622da4e-af48-48dc-ad66-1aba6355d294",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2022%20Land%20Cruiser%20Latest%20Edition%2F20220113_082445.jpg?alt=media&token=58e2e290-8560-41fa-8e00-dd61b1218e62",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2022%20Mercedes%20Benz%20GLS600%20MAYBACH%2F20220115_121355.jpg?alt=media&token=92d71cf1-9e71-4420-b02b-d4807ace02b4",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2022%20Mercedes%20Benz%20GLS600%20MAYBACH%2F20220115_121522.jpg?alt=media&token=461cf4df-55fb-4ba7-9da8-1bbdf072574b",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2022%20Mercedes%20Benz%20GLS600%20MAYBACH%2F20220115_232610.jpg?alt=media&token=1f408540-7d50-4b26-936e-9b8fe695c9ee",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2022%20Merceds%20Benz%20K%2F20220124_193259.jpg?alt=media&token=1584e15d-59ea-4194-94ec-d6c5eb12cc5e",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2022%20Merceds%20Benz%20K%2F20220124_193259.jpg?alt=media&token=1584e15d-59ea-4194-94ec-d6c5eb12cc5e",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F2022%20Merceds%20Benz%20K%2F20220124_193259.jpg?alt=media&token=1584e15d-59ea-4194-94ec-d6c5eb12cc5e",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F70th%20Aniversary%20Land%20Cruier%2F20220115_122239.jpg?alt=media&token=e1141b30-733e-462d-acff-317c9a7faaf4",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F70th%20Aniversary%20Land%20Cruier%2F20220115_122239.jpg?alt=media&token=e1141b30-733e-462d-acff-317c9a7faaf4",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F70th%20Aniversary%20Land%20Cruier%2F20220115_122438.jpg?alt=media&token=a0f7fb58-5b7c-4637-91e0-cc5c77628aec",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F70th%20Aniversary%20Land%20Cruier%2F20220115_122239.jpg?alt=media&token=e1141b30-733e-462d-acff-317c9a7faaf4",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F70th%20Aniversary%20Land%20Cruier%2F20220115_122239.jpg?alt=media&token=e1141b30-733e-462d-acff-317c9a7faaf4",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2F70th%20Aniversary%20Land%20Cruier%2F20220115_122438.jpg?alt=media&token=a0f7fb58-5b7c-4637-91e0-cc5c77628aec",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FBenz%20GLA200%2F20210401_104223.jpg?alt=media&token=95728764-90c5-4e84-93b1-208936a73227",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FBenz%20GLA200%2F20210401_104703.jpg?alt=media&token=485382fb-1e26-40ab-823f-3a56852e6000",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FBenz%20GLA200%2F20210401_104918.jpg?alt=media&token=21637e21-e782-4915-9f7a-b37f05c969e9",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FBrabus%20D35%20Adventure%2F20200706_002723.jpg?alt=media&token=58b8e15d-6b0e-4b59-9d0a-4cfee92f6227",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FBrabus%20D35%20Adventure%2F20200706_002936.jpg?alt=media&token=a1e9c8bb-4de0-4bd5-bc67-6b2b82bff14c",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FBrabus%20D35%20Adventure%2F20200706_003812.jpg?alt=media&token=2ad7758b-536f-4297-9504-fec377eee46f",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FBuckets%2F20210415_001635.jpg?alt=media&token=83f8e21a-e186-4745-a67c-eacb15e31fb1",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FBuckets%2F20210415_001656.jpg?alt=media&token=4d8cd518-f25b-4df9-90a5-e6a7dfd598e1",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FBuckets%2F20220202_163905.jpg?alt=media&token=dde50107-c52d-4344-9494-d0f90bfd2136",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FCAT%20140%20GC%20Grader%2F20210529_225413.jpg?alt=media&token=7da2d91d-6cd7-4460-ba2e-1841bb1080eb",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FCAT%20140%20GC%20Grader%2F20210529_225437.jpg?alt=media&token=3b50818a-94f9-4e68-993a-4dbe9254720b",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FCAT%20140%20GC%20Grader%2F20210529_225519.jpg?alt=media&token=02012ace-7ed9-4377-b71d-5691599c0286",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FCAT%20323%20Excavator%2F20220103_105454.jpg?alt=media&token=1274a02a-3790-4005-869b-37fc2c08d96c",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FCAT%20323%20Excavator%2F20220103_155843.jpg?alt=media&token=c70e4581-cb1b-45e5-8294-d504708aaea9",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FCAT%20323%20Excavator%2F20220103_163057.jpg?alt=media&token=76d476c4-4ce7-4b23-aaf1-b630bf1d32cc",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FCAT%20330D%20Excavator%2F20220103_173317.jpg?alt=media&token=6c077de3-8a9e-47e2-a347-5b4073368d36",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FCAT%20330D%20Excavator%2F20220103_173334.jpg?alt=media&token=6a1f1f6b-2d2e-46a0-b0df-e47204fb9bb9",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FCAT%20330D%20Excavator%2F20220103_173727.jpg?alt=media&token=15e7f7a2-df4c-446e-89f2-c5e48ba28e9c",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FCAT%20950F%20Payloader%2F20220219_133617.jpg?alt=media&token=24df2733-4baa-4b8c-bf40-67323776b07c",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FCAT%20950F%20Payloader%2F20220219_133640.jpg?alt=media&token=241f4191-728e-4046-8ded-b65b5948776b",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FCAT%20950F%20Payloader%2F20220219_133953.jpg?alt=media&token=78e23ba9-80bc-4428-b99f-d182fcaa6b75",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FCAT%20980M%20%26%20CAT%20966%20Payloaders%2F20220103_170801.jpg?alt=media&token=4e782c66-c31b-4455-aaa5-19cfb1611ebb",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FCAT%20980M%20%26%20CAT%20966%20Payloaders%2F20220103_170821.jpg?alt=media&token=917a568b-49b9-498d-bb9d-b39c6782fafa",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FCAT%20980M%20%26%20CAT%20966%20Payloaders%2F20220103_170855.jpg?alt=media&token=734c03d6-8339-40f3-826c-3ec0a914ac15",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FCAT%20D6R2%20Bulldozer%2F20210529_223335.jpg?alt=media&token=960b51fe-1b4c-4d23-ba57-e61f906e2789",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FCAT%20D6R2%20Bulldozer%2F20210529_223415.jpg?alt=media&token=7f6c8c87-1077-4918-9574-1e89670cef20",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FCAT%20D6R2%20Bulldozer%2F20210529_223532.jpg?alt=media&token=6c441ee2-2615-45ea-8775-f691d56c51e4",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FCRUPP%20Mobile%20Crane%20350Tons%2F20220106_164946.jpg?alt=media&token=bc1c9baa-72e0-4be5-bc6d-c92596c7d2f4",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FCRUPP%20Mobile%20Crane%20350Tons%2F20220106_165123.jpg?alt=media&token=fea884ce-919d-46ed-b74a-3469dc044a90",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FCRUPP%20Mobile%20Crane%20350Tons%2F20220106_165455.jpg?alt=media&token=1a1fc8e4-0220-4979-b811-0af8faca3282",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FDIECI%20L4700%20%26%20F700%2F20210816_104147.jpg?alt=media&token=27d890b6-5c65-4076-acff-d71af655a204",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FDIECI%20L4700%20%26%20F700%2F20210816_104216.jpg?alt=media&token=2c328c02-c8bf-425d-ac7a-143cbfed64eb",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FDIECI%20L4700%20%26%20F700%2F20210816_104224.jpg?alt=media&token=e492c017-af6e-45e9-970e-8e9ce59eaaca",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FDYNAPAC%20Compassion%2F20210816_104238.jpg?alt=media&token=f0061144-55b8-48ec-b6e6-840f653e0185",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FDYNAPAC%20Compassion%2F20210816_104249.jpg?alt=media&token=a3242d8e-8847-4977-bdd9-93aa74e03a13",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FDYNAPAC%20Compassion%2F20210816_104325.jpg?alt=media&token=09af18ef-8906-41e1-9361-d086891f2bfc",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FDifferent%20Trucks%2F20210118_121940.jpg?alt=media&token=d95d3da4-30f4-4375-938b-d97091d9162f",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FDifferent%20Trucks%2F20210118_122120.jpg?alt=media&token=7e4402cd-3b26-4194-99c7-c4b1153a5ed3",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FDifferent%20Trucks%2F20210118_122201.jpg?alt=media&token=a21aaaf7-769b-4b64-810c-b9b8e5c50ffb",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FElectric%20Sicessors%20Equipment%2F20220129_134406.jpg?alt=media&token=1b570b7d-dd78-4c08-8a05-bbcf69cd438a",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FElectric%20Sicessors%20Equipment%2F20220129_134437.jpg?alt=media&token=b8ea54c2-e109-48ce-94fc-6307740430ae",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FElectric%20Sicessors%20Equipment%2F20220129_134544.jpg?alt=media&token=46067633-d66f-43b7-abf3-7f4382e34be0",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FGROVE%20Crane%20RT880E%2F20220106_113649.jpg?alt=media&token=f40f662e-b8f9-4b22-88a8-8ca2adc2e0eb",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FGROVE%20Crane%20RT880E%2F20220106_113808.jpg?alt=media&token=2cf3f26f-4f3d-4c60-8da7-45b4b81ec2de",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FGROVE%20Crane%20RT880E%2F20220108_132301.jpg?alt=media&token=9ac902ba-d82c-4bed-835e-08c878afd098",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FHitachi%20ZA%20IS%20240%20LC%20Excavator%2F20220105_093138.jpg?alt=media&token=e3fe8cd0-4215-4298-a86f-11cec1b265fe",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FHitachi%20ZA%20IS%20240%20LC%20Excavator%2F20220105_093258.jpg?alt=media&token=8baf7a3b-2f09-4227-ad05-a8b0a4aa309d",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FHitachi%20ZA%20IS%20240%20LC%20Excavator%2F20220105_093319.jpg?alt=media&token=09cf80b9-9dac-4e1c-9484-19313de71d2c",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FHyundai%20Excavator%2F20210521_173017.jpg?alt=media&token=9d7ea136-ff20-4057-8234-888fd02655ae",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FHyundai%20Excavator%2F20210521_190043.jpg?alt=media&token=6bfc3d32-adb6-4bd8-b834-2482fe652bef",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FHyundai%20Excavator%2F20220115_100839.jpg?alt=media&token=9347734b-6cc6-4ea4-96ab-ea60fc83fb66",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FHyundai%20Forklift%2F20220115_100433.jpg?alt=media&token=b6bb345b-b316-4d70-9c30-e8f1962f95ab",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FHyundai%20Forklift%2F20220115_100452.jpg?alt=media&token=f06b05ed-3204-48e9-9bac-cab99314196d",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FHyundai%20Forklift%2F20220115_100520.jpg?alt=media&token=a8b28069-fd08-4cdd-8b1b-c0cd1b28d2f5",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FHyundai%20Payloaders%2F20220115_095713.jpg?alt=media&token=24ecb9c9-42be-4f5b-92be-abadd172d14d",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FHyundai%20Payloaders%2F20220115_100150.jpg?alt=media&token=fd1624e7-bf51-4097-a877-07aa9419997c",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FHyundai%20Payloaders%2F20220115_100653.jpg?alt=media&token=8bb116b4-e7da-4029-a0ba-e38c4ae5df09",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FIVECO%2F20201024_222225.jpg?alt=media&token=1d355bc3-feb3-49a0-b4b6-257c1e592d5a",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FIVECO%2F20201024_222710.jpg?alt=media&token=7d2365fb-84f9-45d5-b8ef-76973239d4c0",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FIVECO%2F20210717_164914.jpg?alt=media&token=16522569-9f85-47b9-ae86-286d95aa2e5a",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FIsuzu%20Truck%20heads%2F20210729_124305.jpg?alt=media&token=f2c26630-4f9c-49ad-a103-fb1a03067287",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FIsuzu%20Truck%20heads%2F20210729_124554.jpg?alt=media&token=4b823ae0-55c4-4cbb-842e-70c5b53d3567",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FIsuzu%20Truck%20heads%2F20210729_124610.jpg?alt=media&token=6c1490e8-1793-4413-9858-eafa1b2baf85",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FJohn%20Deere%20%20644K%20Wheel%20Loader%2F20220104_232005.jpg?alt=media&token=e8775335-757d-4faa-97da-5eae2ef2fa28",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FJohn%20Deere%20%20644K%20Wheel%20Loader%2F20220104_232203.jpg?alt=media&token=6406121e-2c68-4b46-971a-5f7a09fe4601",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FJohn%20Deere%20%20644K%20Wheel%20Loader%2F20220104_232915.jpg?alt=media&token=ac63f662-3b80-4406-9c90-3f77e96b3857",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FJohn%20Deere%20Excavators%2F20220104_174032.jpg?alt=media&token=62fbf1d3-936b-4ac2-94ac-fca5d6f61d89",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FJohn%20Deere%20Excavators%2F20220104_174032.jpg?alt=media&token=62fbf1d3-936b-4ac2-94ac-fca5d6f61d89",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FJohn%20Deere%20Excavators%2F20220104_230300.jpg?alt=media&token=8961e0b0-b770-47c8-bb18-43d424636c5f",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FLOVOL%20Truks%20%26%20Equipments%2F20220201_142653.jpg?alt=media&token=d7b0c2fc-9e7c-4b25-872e-bc6831d96884",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FLOVOL%20Truks%20%26%20Equipments%2F20220201_143430.jpg?alt=media&token=0d7d4ed7-366d-4278-a047-7f3956ad0a8f",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FLOVOL%20Truks%20%26%20Equipments%2F20220201_145651.jpg?alt=media&token=2ddb1f10-d135-4262-a0c5-a29449c1c0a0",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FLexus%20LX570%20supper%20Sport%2F20200513_095244.jpg?alt=media&token=378c1a32-5d97-4ef5-b27d-726b803b530e",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FLexus%20LX570%20supper%20Sport%2F20200513_095320.jpg?alt=media&token=11925446-6790-45b2-84a9-306443f94696",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FLexus%20LX570%20supper%20Sport%2F20200513_095405.jpg?alt=media&token=0b3c6a21-d7c9-4d92-9bb8-00948ba8dcd1",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FMercedes%20Benz%20Atros%20Mixer%2F20210303_174659.jpg?alt=media&token=6670c7d3-41dd-4e04-bd8a-cf5e46a1d12a",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FMercedes%20Benz%20Atros%20Mixer%2F20210303_175234.jpg?alt=media&token=3320ae28-67fb-46dd-92c0-8bb01c72c8ac",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FMercedes%20Benz%20Atros%20Mixer%2F20210303_175832.jpg?alt=media&token=ee3b2a63-952e-4b70-9293-c0cac33535cc",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FMercedes%20Benz%20Sprinter%20Passengers%20Bus%2F20211027_145559.jpg?alt=media&token=c80fa994-fe6c-4458-ba73-76e8f6e47f89",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FMercedes%20Benz%20Sprinter%20Passengers%20Bus%2F20211027_145628.jpg?alt=media&token=73dbcb77-f2a6-426b-8fda-fc682311482f",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FMercedes%20Benz%20Sprinter%20Passengers%20Bus%2F20211027_145840.jpg?alt=media&token=e240baa3-b6ed-4095-8272-712eabc54c73",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FMercedes%20Benz%20V250%2F20200506_114321_resize_79.jpg?alt=media&token=e94d75da-5bf2-438c-bc1e-3fd2dbb1cecb",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FMercedes%20Benz%20V250%2F20200506_114348_resize_67.jpg?alt=media&token=b0d4c1d2-c681-41eb-a5f8-c18ce789aa7f",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FMercedes%20Benz%20V250%2F20200506_114348_resize_67.jpg?alt=media&token=b0d4c1d2-c681-41eb-a5f8-c18ce789aa7f",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FOther%20Exotic%20Cars%2F20200419_133738_resize_95.jpg?alt=media&token=523b201e-3259-4887-aa25-3090f1dc0957",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FOther%20Exotic%20Cars%2F20200611_201516.jpg?alt=media&token=01f737d0-aaad-4c68-92ee-4f36a1d27971",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FOther%20Exotic%20Cars%2F20200611_202042.jpg?alt=media&token=876c15a7-05a7-45cb-aead-26cfb2a5c266",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FOther%20Heavy%20Equipments%2F20210819_161536.jpg?alt=media&token=ae6efd01-180b-44b9-8233-12795f8599bf",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FOther%20Heavy%20Equipments%2F20210904_231721.jpg?alt=media&token=13693d4a-efc5-4d2c-8097-a56f5b69ee29",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FOther%20Heavy%20Equipments%2F20220114_101425.jpg?alt=media&token=ed1b77ac-83ec-4818-a632-42fff9f93026",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FPorshe%20Cayenne%20%26%20Panamera%2F20200720_001934.jpg?alt=media&token=db0ac5c8-f6ec-45a5-9724-f244c62eef27",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FPorshe%20Cayenne%20%26%20Panamera%2F20200720_003426.jpg?alt=media&token=0475e1cd-82db-4b60-88f6-f8a0e7618e61",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FPorshe%20Cayenne%20%26%20Panamera%2F20200720_004049.jpg?alt=media&token=e66b5c4d-8800-4e64-b9fc-e3cca86ab781",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FPowertrac%20Euro75%2F20210816_104520.jpg?alt=media&token=034e996f-e7a8-4172-b581-21c8eb36d1f1",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FPowertrac%20Euro75%2F20210816_104531.jpg?alt=media&token=1708077a-c8a4-4203-9a20-a66534078ca2",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FPowertrac%20Euro75%2F20210816_104546.jpg?alt=media&token=816e583a-6c6d-4571-ad76-e8c4443d7c10",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FRolfhorlge%20G%20Wagon%2F20220114_134627.jpg?alt=media&token=701b9113-ac05-4298-8730-be8babb884a6",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FRolfhorlge%20G%20Wagon%2F20220114_134828.jpg?alt=media&token=3ed2ebe3-1b17-4c11-850f-29c6ae83b6ed",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FRolfhorlge%20G%20Wagon%2F20220114_135026.jpg?alt=media&token=1a0308ac-b6eb-4674-aeb6-053a1ee1bc1d",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FSANY%20Excavotors%2F20210522_231858.jpg?alt=media&token=c7f3dd5a-b8b4-4963-8a78-a76236b97262",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FSANY%20Excavotors%2F20210531_223043.jpg?alt=media&token=e04297fc-059d-4c10-9acf-f7626c19b8ad",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FSANY%20Excavotors%2F20210622_111429.jpg?alt=media&token=d447ba24-04a2-4025-8c48-213fb1715b47",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FToyota%20Hillux%202.7VVT%2027.5Million%2F20200515_105655.jpg?alt=media&token=f1b4e006-914c-4879-b521-492051fdd503",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FToyota%20Hillux%202.7VVT%2027.5Million%2F20200515_105711.jpg?alt=media&token=5bed0d50-f045-46ff-8cc4-a5793fcf1336",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FToyota%20Hillux%202.7VVT%2027.5Million%2F20200515_105948.jpg?alt=media&token=761ed40a-e2be-4ceb-b740-611adcab6cd2",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FVolvo%20Excavator%2F20210716_200011.jpg?alt=media&token=f1609548-5844-426a-83c1-d7612218bc0c",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FVolvo%20Excavator%2F20220104_101520.jpg?alt=media&token=6c071d88-5d0d-4918-80d0-55c8e6868561",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FVolvo%20Excavator%2F20220104_105056.jpg?alt=media&token=8bd406b7-19c6-420a-a6d5-48a543fd399e",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FVolvo%20Payloaders%2F20220104_110930.jpg?alt=media&token=46856d64-bd60-4411-a107-447abbf7a9b3",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FVolvo%20Payloaders%2F20220104_111238.jpg?alt=media&token=b2bb5719-0411-4554-aa6e-0ae1085798bc",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FVolvo%20Payloaders%2F20220104_111302.jpg?alt=media&token=05c20250-80e3-4030-b7a1-27cfa1dd247d",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FVolvo%20Roller%2F20220104_110822.jpg?alt=media&token=7dfcee55-aff2-4fdd-9d6f-2afb445cfb31",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FVolvo%20Roller%2F20220104_110856.jpg?alt=media&token=2015e1e9-e801-4a43-92c2-12e5bb123aa0",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FVolvo%20Roller%2F20220104_110930.jpg?alt=media&token=201ef6d1-83d6-48cb-b765-91f43f76a7c4",
    },
    {
        carImage1: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FXOLG%20Earthmover%20Machine%2F20220104_094335.jpg?alt=media&token=c57fff1d-10a6-416b-9529-f82ab6e92244",
        carImage2: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FXOLG%20Earthmover%20Machine%2F20220104_094358.jpg?alt=media&token=d41d7eee-ea03-4ee0-addd-400a69b663ad",
        carImage3: "https://firebasestorage.googleapis.com/v0/b/ornelng-35893.appspot.com/o/Products%2FXOLG%20Earthmover%20Machine%2F20220104_094437.jpg?alt=media&token=1965e776-aa23-4f39-b0f4-bc67779e8f93",
    }

]

module.exports = cars