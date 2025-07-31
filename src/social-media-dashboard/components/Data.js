import instagram from './images/icon-instagram.svg'
import twitter from './images/icon-twitter.svg'
import youtube from './images/icon-youtube.svg'
import facebook from './images/icon-facebook.svg'
import iconUp from './images/icon-up.svg'
import iconDown from './images/icon-down.svg'

export let platForms =  [
    {
        id: 1,
        username:'@nathanf',
        logo:{
            img:twitter,
            alt:"twitter logo"
        },
        followers:'1044',
        numberOf:"Followers",
        iconUpDown:{
        img:iconUp
       },
        visit:'99 ',
        borderColor:"hsl(203, 89%, 53%)"
    },
    {
        id: 2,
        username:'  @realnathanf',
        logo:{
            img:instagram,
            alt:"instagram logo"
        },
        followers:'11k',
        numberOf:"Followers",
        iconUpDown:{
        img:iconUp
       },
        visit:'1099',
        borderColor:"hsl(37, 97%, 70%,hsl(5, 77%, 71%), hsl(329, 70%, 58%)"
    },
    {
        id: 3,
        username:'@nathanf',
        logo:{
            img:facebook,
            alt:"facebook logo"
        },
        followers:'1987',
        numberOf:"Followers",
        iconUpDown:{
        img:iconUp
       },
        visit:'12',
        borderColor:"hsl(208, 92%, 53%)"
    },
    {
        id: 4,
        username:'Nathan F.',
        logo:{
            img:youtube,
            alt:"youtube logo"
        },
        followers:'8239',
        numberOf:"Subscribers",
        iconUpDown:{
        img:iconDown
       },
        visit:'144'
    }
]

export let overviewData = [
    {
       id:1,
       stats:"Page Views",
       logo:{
            img:facebook,
            alt:"facebook logo"
        },
       numberStats:'87',
       iconUpDown:{
        img:iconUp
       },
       percentageStats:'3%'
    },
    {
       id:2,
       stats:"Likes",
       logo:{
            img:facebook,
            alt:"facebook logo"
        },
       numberStats:'52',
       iconUpDown:{
        img:iconDown
       },
       percentageStats:'2%'
    },
    {
       id:3,
       stats:"Likes",
       logo:{
            img:instagram,
            alt:"instagram logo"
        },
       numberStats:'5462',
       iconUpDown:{
        img:iconUp
       },
       percentageStats:'2257%'
    }, 
    {
       id:4,
       stats:"Profile Views",
       logo:{
            img:instagram,
            alt:"instagram logo"
        },
       numberStats:'57k',
       iconUpDown:{
        img:iconUp
       },
       percentageStats:'1375%'
    },
    {
       id:5,
       stats:"Retweets",
       logo:{
            img:twitter,
            alt:"twitter logo"
        },
       numberStats:'117',
       iconUpDown:{
        img:iconUp
       },
       percentageStats:'303%'
    },
    {
       id:6,
       stats:"Likes",
       logo:{
            img:twitter,
            alt:"twitter logo"
        },
       numberStats:'507',
       iconUpDown:{
        img:iconUp
       },
       percentageStats:'507%'
    },
    {
       id:7,
       stats:"Likes",
       logo:{
            img:youtube,
            alt:"youtube logo"
        },
       numberStats:'107',
       iconUpDown:{
        img:iconDown
       },
       percentageStats:'19%'
    },
    {
       id:8,
       stats:"Total Views",
       logo:{
            img:youtube,
            alt:"youtube logo"
        },
       numberStats:'1407',
       iconUpDown:{
        img:iconDown
       },
       percentageStats:'12%'
    },
   
]