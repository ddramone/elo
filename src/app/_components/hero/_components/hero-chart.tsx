"use client"

import { motion, Transition } from "framer-motion"
import { BaseDelay } from "../constants"

const pathTransition = {
  delay: BaseDelay.chart,
  duration: 1,
  type: "tween",
} satisfies Transition

export default function HeroChart() {
  return (
    <motion.svg
      viewBox="0 0 287 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          mass: 0.7,
          delay: BaseDelay.chart,
          type: "spring",
        },
      }}
    >
      <g clipPath="url(#clip0_662_691)">
        <mask id="path-1-inside-1_662_691" fill="white">
          <path d="M17.5703 8C17.5703 3.58172 21.1441 0.238253 25.5526 0.532152L278.99 17.428C283.399 17.7219 286.972 21.5419 286.972 25.9601V106.347L17.5703 88.3872V8Z" />
        </mask>
        <path
          d="M17.5703 8C17.5703 3.58172 21.1441 0.238253 25.5526 0.532152L278.99 17.428C283.399 17.7219 286.972 21.5419 286.972 25.9601V106.347L17.5703 88.3872V8Z"
          fill="white"
        />
        <path
          d="M263.102 60.5615C255.904 60.0816 248.705 59.6017 241.507 59.1218C234.308 58.6419 227.11 58.162 219.911 57.6821C212.713 57.2022 205.515 41.6255 198.316 41.1456C191.117 40.6657 183.919 40.1858 176.721 39.7059C169.522 39.226 162.324 38.7461 155.125 38.2662C147.927 37.7863 140.728 52.4032 133.53 51.9233C126.331 51.4434 119.133 50.9635 111.934 50.4836C104.736 50.0037 97.5376 34.4271 90.339 33.9472C83.1405 33.4672 75.9419 48.0841 68.7434 47.6042C61.5448 47.1243 54.3467 46.6445 47.1482 46.1646C39.9496 45.6847 32.751 45.2047 25.5525 44.7248M263.102 90.7551C255.904 90.2752 248.705 89.7953 241.507 89.3154C234.308 88.8355 227.11 88.3556 219.911 87.8757C212.713 87.3958 205.515 86.9159 198.316 86.436C191.117 85.9561 183.919 85.4762 176.721 84.9963C169.522 84.5164 162.324 84.0365 155.125 83.5566C147.927 83.0767 140.728 82.5968 133.53 82.1169C126.331 81.637 119.133 66.0603 111.934 65.5804C104.736 65.1005 97.5376 64.6206 90.339 64.1407C83.1405 63.6608 75.9419 63.1809 68.7434 62.701C61.5448 62.2211 54.3467 61.7413 47.1482 61.2614C39.9496 60.7814 32.751 60.3015 25.5525 59.8216M263.102 45.4647C255.904 44.9848 248.705 44.5049 241.507 44.025C234.308 43.5451 227.11 27.9684 219.911 27.4885C212.713 27.0086 205.515 26.5287 198.316 26.0488C191.117 25.5689 183.919 25.089 176.721 24.6091C169.522 24.1292 162.324 23.6493 155.125 23.1694C147.927 22.6895 140.728 22.2096 133.53 21.7297C126.331 21.2498 119.133 20.7699 111.934 20.29C104.736 19.8101 97.5376 19.3303 90.339 18.8504C83.1405 18.3705 75.9419 17.8905 68.7434 17.4106C61.5448 16.9307 54.3467 16.4509 47.1482 15.971C39.9496 15.4911 32.751 15.0112 25.5525 14.5312M263.102 75.6583C255.904 75.1784 248.705 74.6985 241.507 74.2186C234.308 73.7387 227.11 73.2588 219.911 72.7789C212.713 72.299 205.515 71.8191 198.316 71.3392C191.117 70.8593 183.919 70.3794 176.721 69.8995C169.522 69.4196 162.324 58.8749 155.125 53.363C147.927 47.8507 140.728 37.3064 133.53 36.8265C126.331 36.3466 119.133 35.8667 111.934 35.3868C104.736 34.9069 97.5376 49.5239 90.339 49.0439C83.1405 48.564 75.9419 32.9873 68.7434 32.5074C61.5448 32.0275 54.3467 31.5477 47.1482 31.0678C39.9496 30.5879 32.751 30.108 25.5525 29.628M263.102 60.5634C255.904 60.0835 248.705 59.6036 241.507 59.1237C234.308 58.6438 227.11 58.1639 219.911 57.684C212.713 57.2041 205.515 41.6274 198.316 41.1475C191.117 40.6676 183.919 40.1877 176.721 39.7078C169.522 39.2279 162.324 38.748 155.125 38.2681C147.927 37.7882 140.728 52.4051 133.53 51.9252C126.331 51.4453 119.133 50.9654 111.934 50.4855C104.736 50.0056 97.5377 34.4289 90.3391 33.949C83.1405 33.4691 75.942 48.086 68.7434 47.6061C61.5449 47.1262 54.3468 46.6463 47.1482 46.1664C39.9497 45.6865 32.7511 45.2066 25.5526 44.7267"
          stroke="#E4E4E4"
          strokeLinecap="round"
        />
        <path
          d="M263.102 30.3679C255.904 29.888 248.706 29.4081 241.507 28.9282C234.309 28.4483 227.11 38.0328 219.911 42.5853C212.713 47.1374 205.515 56.7223 198.316 56.2424C191.118 55.7625 183.919 55.2826 176.721 54.8027C169.522 54.3228 162.324 68.9397 155.125 68.4598C147.927 67.9799 140.728 67.5 133.53 67.0201C126.332 66.5402 119.133 81.1571 111.934 80.6772C104.736 80.1973 97.5378 79.7174 90.3393 79.2375C83.1407 78.7576 75.9422 78.2777 68.7436 77.7978C61.5451 77.3179 54.347 76.8381 47.1484 76.3582C39.9499 75.8782 32.7513 75.3983 25.5527 74.9184"
          stroke="#E4E4E4"
        />
        <path
          opacity="0.2"
          d="M269.974 32.8546L270.141 31.7918L269.663 31.7599L269.746 31.1415L270.237 31.1742L270.375 30.2654L269.884 30.2326L269.968 29.6142L270.471 29.6478L270.626 28.6441L271.261 28.6804L271.105 29.6901L271.764 29.734L271.92 28.7303L272.554 28.7667L272.398 29.7763L272.841 29.8058L272.758 30.4242L272.303 30.3939L272.159 31.3023L272.62 31.333L272.536 31.9515L272.063 31.9199L271.902 32.9832L271.267 32.9408L271.435 31.878L270.77 31.8337L270.602 32.8965L269.974 32.8546ZM270.866 31.2161L271.53 31.2604L271.668 30.3516L271.01 30.3077L270.866 31.2161ZM273.396 32.4108L274.599 32.491V30.265L273.534 30.194V29.594L273.929 29.6203C274.474 29.6566 274.713 29.4386 274.719 28.911L275.33 28.9517V32.5397L276.401 32.6111V33.2831L273.396 33.0828V32.4108Z"
          fill="black"
        />
        <path
          opacity="0.2"
          d="M270.09 47.8624L270.258 46.7996L269.779 46.7677L269.863 46.1493L270.354 46.182L270.491 45.2732L270 45.2405L270.084 44.622L270.587 44.6556L270.743 43.652L271.377 43.6883L271.222 44.6979L271.88 44.7418L272.036 43.7382L272.671 43.7745L272.515 44.7841L272.958 44.8136L272.874 45.432L272.419 45.4017L272.275 46.3101L272.736 46.3409L272.653 46.9593L272.18 46.9277L272.018 47.991L271.383 47.9487L271.551 46.8858L270.887 46.8415L270.719 47.9044L270.09 47.8624ZM270.982 46.2239L271.647 46.2682L271.785 45.3594L271.126 45.3155L270.982 46.2239ZM273.494 45.1614C273.566 44.3442 274.147 43.7769 275.045 43.8368C275.889 43.893 276.494 44.4793 276.494 45.2113C276.494 45.8113 276.051 46.2198 275.47 46.5171C275.147 46.6635 274.41 47.0885 274.339 47.4737L276.512 47.6185V48.2905L273.417 48.0842C273.417 46.8362 274.063 46.4233 274.973 45.932C275.392 45.7019 275.727 45.4723 275.727 45.1543C275.727 44.8123 275.446 44.5355 275.045 44.5088C274.608 44.4796 274.327 44.7789 274.261 45.2665L273.494 45.1614Z"
          fill="black"
        />
        <path
          opacity="0.2"
          d="M269.974 62.8546L270.141 61.7918L269.663 61.7599L269.746 61.1415L270.237 61.1742L270.375 60.2654L269.884 60.2326L269.968 59.6142L270.471 59.6478L270.626 58.6441L271.261 58.6804L271.105 59.6901L271.764 59.734L271.92 58.7303L272.554 58.7667L272.398 59.7763L272.841 59.8058L272.758 60.4242L272.303 60.3939L272.159 61.3023L272.62 61.333L272.536 61.9515L272.063 61.9199L271.902 62.9832L271.267 62.9408L271.435 61.878L270.77 61.8337L270.602 62.8965L269.974 62.8546ZM270.866 61.2161L271.53 61.2604L271.668 60.3516L271.01 60.3077L270.866 61.2161ZM274.785 60.5834C275.138 60.6129 275.473 60.4673 275.473 60.0413C275.473 59.7413 275.234 59.5213 274.827 59.4942C274.474 59.4706 274.222 59.6399 274.186 59.9195L273.414 59.832C273.492 59.1772 274.06 58.7711 274.833 58.8226C275.677 58.8788 276.24 59.3784 276.24 60.0384C276.24 60.5064 275.964 60.812 275.467 60.9169C276.066 61.1128 276.383 61.5839 276.383 62.0879C276.383 62.8439 275.755 63.336 274.833 63.2746C274.001 63.2191 273.324 62.694 273.288 61.8996L274.054 61.9147C274.09 62.3431 274.468 62.5782 274.833 62.6026C275.306 62.6341 275.617 62.3908 275.617 61.9948C275.617 61.5568 275.3 61.2597 274.785 61.2374L274.515 61.2254V60.5594L274.785 60.5834Z"
          fill="black"
        />
        <path
          opacity="0.2"
          d="M269.974 77.8546L270.141 76.7918L269.663 76.7599L269.746 76.1415L270.237 76.1742L270.375 75.2654L269.884 75.2326L269.968 74.6142L270.471 74.6478L270.626 73.6441L271.261 73.6804L271.105 74.6901L271.764 74.734L271.92 73.7303L272.554 73.7667L272.398 74.7763L272.841 74.8058L272.758 75.4242L272.303 75.3939L272.159 76.3023L272.62 76.333L272.536 76.9515L272.063 76.9199L271.902 77.9832L271.267 77.9408L271.435 76.878L270.77 76.8337L270.602 77.8965L269.974 77.8546ZM270.866 76.2161L271.53 76.2604L271.668 75.3516L271.01 75.3077L270.866 76.2161ZM276.03 73.9984V76.8124L276.467 76.8415V77.5135L276.03 77.4844V78.2584L275.3 78.2097V77.4357L273.18 77.2944V76.5744L275.168 73.9409L276.03 73.9984ZM274.03 76.6791L275.3 76.7637V75.0237L274.03 76.6791Z"
          fill="black"
        />
        <path
          opacity="0.2"
          d="M269.974 92.8546L270.141 91.7918L269.663 91.7599L269.746 91.1415L270.237 91.1742L270.375 90.2654L269.884 90.2326L269.968 89.6142L270.471 89.6478L270.626 88.6441L271.261 88.6804L271.105 89.6901L271.764 89.734L271.92 88.7303L272.554 88.7667L272.398 89.7763L272.841 89.8058L272.758 90.4242L272.303 90.3939L272.159 91.3023L272.62 91.333L272.536 91.9515L272.063 91.9199L271.902 92.9832L271.267 92.9408L271.435 91.878L270.77 91.8337L270.602 92.8965L269.974 92.8546ZM270.866 91.2161L271.53 91.2604L271.668 90.3516L271.01 90.3077L270.866 91.2161ZM276.168 89.0076V89.6796L274.372 89.5598L274.24 90.559C274.426 90.3914 274.707 90.3142 274.994 90.3333C275.797 90.3868 276.395 91.0387 276.395 91.9027C276.395 92.7727 275.761 93.3364 274.857 93.2762C274.048 93.2223 273.396 92.6448 273.336 91.9328L274.102 91.9479C274.144 92.3107 274.462 92.5778 274.893 92.6066C275.318 92.6349 275.623 92.3252 275.623 91.8512C275.623 91.3772 275.288 91.0129 274.839 90.983C274.527 90.9622 274.252 91.1178 274.156 91.3455L273.396 91.2948L273.737 88.8455L276.168 89.0076Z"
          fill="black"
        />
      </g>
      <path
        d="M14.577 7.80044C14.577 1.72531 19.4909 -2.87196 25.5526 -2.46785L278.99 14.428C285.052 14.8321 289.966 20.0846 289.966 26.1597L283.979 25.7606C283.979 22.9992 281.745 20.6117 278.99 20.428L25.5526 3.53215C22.7973 3.34846 20.5637 5.43813 20.5637 8.19956L14.577 7.80044ZM286.972 106.347L17.5703 88.3872L286.972 106.347ZM14.577 88.1876V7.80044C14.577 1.72531 19.4909 -2.87196 25.5526 -2.46785V3.53215C22.7973 3.34846 20.5637 5.43813 20.5637 8.19956V88.5867L14.577 88.1876ZM278.99 14.428C285.052 14.8321 289.966 20.0846 289.966 26.1597V106.547L283.979 106.148V25.7606C283.979 22.9992 281.745 20.6117 278.99 20.428V14.428Z"
        fill="#F9EDD8"
        mask="url(#path-1-inside-1_662_691)"
      />
      <mask id="mask0_662_691" maskUnits="userSpaceOnUse" x="-5" y="20" width="289" height="84">
        <path
          d="M17.5955 66.682V59.2718L-5 56.5074V83.6115L283.487 103.862L280.179 24.3032L205.607 20.0586L73.5083 69.5935L17.5955 66.682Z"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_662_691)">
        <g opacity="0.6" filter="url(#filter0_f_662_691)">
          <motion.path
            initial={{
              pathLength: 0,
            }}
            animate={{ pathLength: 1 }}
            transition={{ ...pathTransition, delay: pathTransition.delay + 0.1 }}
            d="M25.5532 74.9105C40.6472 75.8543 39.9503 75.8703 47.1489 76.3502C54.3474 76.8301 61.5456 77.31 68.7441 77.7899C75.9427 78.2698 83.1413 78.7497 90.3398 79.2296C97.5384 79.7095 104.737 80.1894 111.935 80.6693C119.134 81.1492 126.332 66.5323 133.531 67.0122C140.729 67.4921 147.927 67.972 155.126 68.4519C162.324 68.9318 169.523 54.3149 176.721 54.7948C183.919 55.2747 191.118 55.7546 198.317 56.2345C205.515 56.7144 212.714 47.1294 219.912 42.5773C227.11 38.0248 234.309 28.4404 241.507 28.9203C248.706 29.4002 255.063 29.7803 263.102 30.3599"
            stroke="#DE931A"
          />
        </g>
        <motion.path
          initial={{
            pathLength: 0,
          }}
          animate={{ pathLength: 1 }}
          transition={pathTransition}
          d="M17.7686 63.8711C-2.17524 62.0699 -10.197 72.6773 25.5533 74.91C40.6474 75.8538 39.9505 75.8698 47.149 76.3497C54.3476 76.8296 61.5457 77.3095 68.7442 77.7894C75.9428 78.2693 83.1414 78.7492 90.34 79.2291C97.5385 79.709 104.737 80.1889 111.935 80.6688C119.134 81.1487 126.332 66.5318 133.531 67.0117C140.729 67.4916 147.927 67.9715 155.126 68.4514C162.324 68.9313 169.523 54.3144 176.721 54.7943C183.92 55.2742 191.118 55.7541 198.317 56.234C205.515 56.7139 212.714 47.1289 219.912 42.5768C227.11 38.0243 234.309 28.4399 241.508 28.9198C248.706 29.3997 255.063 29.7798 263.102 30.3594"
          stroke="#DE931A"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_662_691"
          x="21.0544"
          y="24.4023"
          width="246.547"
          height="60.7812"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_662_691" />
        </filter>
        <clipPath id="clip0_662_691">
          <path
            d="M17.5703 8C17.5703 3.58172 21.1441 0.238253 25.5526 0.532152L278.99 17.428C283.399 17.7219 286.972 21.5419 286.972 25.9601V106.347L17.5703 88.3872V8Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </motion.svg>
  )
}
