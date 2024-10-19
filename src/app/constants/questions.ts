export const PRODUCT_QUESTIONS=[
    {
        id: 1,
        quetion:"Great!!! <br/> Let’s click some pictures of the <strong>Skincare section</strong>.",
        answer: undefined,
        time: 0,
        type:"start",
        frontViewFile:'',
        frontViewImage:'',
        sideViewFile:'',
        sideViewImage:''
    },
    {
        id: 2,
        quetion:"Let’s measure how big is the <strong>Body Lotion</strong> category in the store.",
        answer: undefined,
        time: 0,
        type:"meter",
        meters: 0,
        centimeter: 0
    },
    {
        id: 3,
        quetion:"Do you see the below products on the shelves?",
        answer: undefined,
        time: 0,
        type:"multi-select-image",
        options:[
            {
                image:"p1.png",
                checked: null
            },
            {
                image:"p2.png",
                checked: null
            },
            {
                image:"p3.png",
                checked: null
            },
            {
                image:"p4.png",
                checked: null
            }
        ]
    },
    {
        id: 4,
        quetion:"Let’s measure total shelve space occupied  by all the below products.",
        answer: undefined,
        time: 0,
        type:"meter-image",
        images:['p1.png','p2.png','p3.png','p4.png'],
        meters: 0,
        centimeter: 0
    },
    {
        id: 5,
        quetion:"Count the number of product facings displayed on the shelves?",
        answer: undefined,
        time: 0,
        type:"meter-count",
        productImage:'p1.png',
        counts: 0,
        file:"",
        image:""
    },
    {
        id: 6,
        quetion:"Where is the product kept on the shelves?",
        answer: undefined,
        time: 0,
        type:"multi-select-question",
        productImage:'p1.png',
        options:[
            {
                title: 'Straight in front of me',
                value: false
            },
            {
                title: 'One level below eye contact',
                value: false
            },
            {
                title: 'Bottom Shelves',
                value: false
            },
            {
                title: 'Topmost Shelf',
                value: false
            }
        ],
        file:"",
        image:""
    },
    {
        id: 7,
        quetion:"Count the number of product facings displayed straight in front of me?",
        answer: undefined,
        time: 0,
        type:"meter-count",
        productImage:'p1.png',
        counts: 0,
        file:"",
        image:""
    },
    {
        id: 8,
        quetion:"Count the number of product facings displayed one level above eye contact?",
        answer: undefined,
        time: 0,
        type:"meter-count",
        productImage:'p1.png',
        counts: 0,
        file:"",
        image:""
    },
    {
        id: 9,
        quetion:"Do you see any of the following branding in the area where products are displayed?",
        answer: undefined,
        time: 0,
        type:"multi-select-image",
        options:[
            {
                image:"p7.png",
                checked: null
            },
            {
                image:"p8.png",
                checked: null
            },
            {
                image:"p5.png",
                checked: null
            },
            {
                image:"p6.png",
                checked: null
            }
        ]
    },
    {
        id: 10,
        quetion:"Click a picture of the following branding display",
        answer: undefined,
        productImage:'p7.png',
        time: 0,
        type:"question-image",
        file:"",
        image:""
    },
]