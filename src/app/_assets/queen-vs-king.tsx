import { cn } from "@/lib/utils"

export default function QueenVsKing({ className }: { className?: string }) {
  return (
    <svg
      className={cn("stroke-neutral-300", className)}
      viewBox="0 0 176 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M136 43.2696C139.504 52.4925 139.453 55.6351 140.675 65.3433M137.242 41.8892C137.565 42.3364 135.484 39.6353 136.697 38.3764C137.723 37.3113 139.228 37.6787 140.675 38.3371M140.675 38.3371C141.805 38.8514 142.9 39.5434 143.704 39.8692C149.779 42.3299 154.892 43.2724 162.124 42.3389C167.35 41.6646 172.747 37.3076 174.299 36.1837M140.675 38.3371C141.796 36.2542 145.956 35.3077 147.966 34.7624M174.299 36.1837C172.738 42.7644 170.073 58.1858 170.612 70.5723M174.299 36.1837C172.211 35.6432 166.306 33.9026 161.738 32.9907M152.544 37.2951C152.929 37.3619 151.733 37.1422 151.245 37.1422C150.756 37.1422 150.876 30.3467 150.566 29.6678C150.255 28.9889 147.002 29.6095 145.848 29.1127C145.357 28.9017 145.705 20.0801 145.944 19.8683C146.184 19.6565 149.85 19.9189 149.503 19.8683M158.793 37.9312C158.793 35.2064 158.047 30.5562 158.793 30.3471C159.539 30.1379 163.709 29.7725 164.482 29.8541C165.254 29.9359 165.227 20.4593 164.004 19.8683C162.781 19.2773 158.017 20.1064 157.577 18.8957C157.137 17.6849 158.301 11.5654 157.779 10.7102C157.256 9.85498 150.245 9.86407 150.209 10.2552C149.975 12.7687 151.111 16.6297 150.577 18.3251M155.092 50.7656C154.801 51.9464 155.831 51.3088 156.05 50.5808M143.186 48.8789C143.186 48.8687 143.186 48.8586 143.186 48.8483C143.19 48.181 143.637 47.463 144.922 46.9951C146.612 46.3798 149.918 48.6586 149.487 51.3738C148.933 54.8528 145.592 54.2015 144.531 52.945C143.475 51.6951 143.197 50.8788 143.186 48.8789ZM143.186 48.8789C143.206 50.2265 145.019 51.3473 145.354 49.7428M153.844 50.6312C153.492 51.8844 153.35 53.2385 154.573 54.3057C155.795 55.3729 158.524 55.4885 159.759 53.461C161.078 51.2926 159.823 47.8348 157.157 47.6341C155.472 47.5072 154.197 49.3783 153.844 50.6312Z"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 36.2736C33.6058 49.1299 28.2441 61.0743 26.7118 74.607M36.2741 32.5607C34.8565 33.2777 33.4831 34.2423 32.474 34.6965C24.8553 38.1265 18.4419 39.4403 9.37176 38.1391C2.81737 37.1991 2.94547 31.5676 1 30.0009C2.95762 39.174 10.0481 58.735 9.37176 76.0009M20.3367 56.0072C20.6356 57.1053 19.5772 56.5123 19.3529 55.8354M10.766 30.0009L8.46235 18.014C8.29328 17.1342 9.27742 16.493 10.0139 17.0032L14.0679 19.8118C14.6241 20.1971 15.3944 19.9304 15.5932 19.2837L20.8322 2.24517C21.1253 1.29204 22.4801 1.30801 22.7506 2.26778L27.3811 18.6963C27.603 19.4836 28.6249 19.6859 29.1301 19.0425L32.008 15.3772C32.6148 14.6044 33.8557 15.0785 33.7925 16.0591L32.8936 30.0009M28.9998 54.847C29 54.8374 29 54.8281 29 54.8185C28.9961 54.198 28.5367 53.5302 27.217 53.0951C25.4811 52.5229 22.0849 54.6421 22.5285 57.167C23.0969 60.4023 26.5286 59.7967 27.6188 58.6282C28.7035 57.4658 28.9892 56.7067 28.9998 54.847ZM21.6179 55.8822C21.9801 57.0476 22.1255 58.3068 20.87 59.2993C19.6147 60.2917 16.8109 60.3992 15.5432 58.5137C14.1876 56.4972 15.477 53.2818 18.2149 53.0951C19.9458 52.9771 21.2559 54.7171 21.6179 55.8822Z"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M109.439 12.6212C108.024 9.24701 111.584 13.8223 112.615 15.0178C115.232 18.0514 117.674 21.785 120.622 24.3765C121.876 35.7912 122.929 47.2401 124.268 58.6442M124.607 67.3968C124.179 65.6753 125.494 70.8315 125.865 72.5694M121.11 68.7681C122.034 68.2498 122.459 73.4788 122.58 73.8739M114.752 31.2709C116.421 37.9854 117.541 44.6972 118.624 51.5524M116.821 62.5982C113.61 51.5538 111.006 40.5713 106.756 29.8969C107 24.5775 107.968 19.4184 108.898 14.2366M127.172 59.4503C127.637 59.6398 128.924 62.7163 128.764 62.959C128.603 63.2018 117.031 69.2385 116.671 69.1992C116.311 69.1598 115.388 65.5926 115.148 65.1615C114.907 64.7307 126.706 59.261 127.172 59.4503Z"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55.4164 12.8223C54.8715 12.8964 54.346 13.041 53.8409 13.2451M53.8409 13.2451C50.2355 14.7021 47.6668 19.1928 46.4908 22.7626C45.0586 27.1101 44.6303 32.6779 45.2502 37.2333C46.0004 42.7463 49.0251 50.679 55.9311 49.7392C65.4669 48.4415 72.8974 34.8385 73.1774 26.0512C73.3218 21.5226 72.1011 17.5477 68.019 13.724C64.4947 10.4228 56.868 11.3797 53.8409 13.2451ZM53.8409 13.2451C53.3619 13.5403 52.998 13.8583 52.7838 14.1857M47.7952 45.0951L48.7239 51.92C48.9749 53.7646 48.7799 57.0555 49.7754 58.6878C50.041 59.1235 51.3094 58.1074 51.235 58.2205M51.6496 58.5307C51.3565 58.5705 52.4794 60.294 52.7336 60.7624C52.9819 61.2202 52.9037 60.1383 52.9759 59.7508C53.3522 57.7299 56.2473 55.0302 57.361 53.4217C57.6619 52.9872 62.3875 46.8253 62.5259 46.9927M52.9441 60.5143C52.7985 59.4446 52.3345 63.0864 52.3388 64.166C52.3469 66.1895 51.4096 67.9046 50.7923 69.8112C50.2511 71.4832 48.889 77.8404 46.0506 76.4666C42.8119 74.8989 49.6297 61.2676 49.3306 59.0697M49.7987 65.0452C49.6943 65.1851 51.5326 65.3223 51.8094 65.3752M50.5216 62.6041C50.4172 62.744 52.2555 62.8812 52.5323 62.9341M49.6459 67.4637C47.9667 67.6923 50.6344 67.5275 51.1663 67.5704M48.4783 70.1259C46.799 70.3544 49.4668 70.1897 49.9987 70.2326M47.2271 73.8291C46.9658 73.4225 48.9498 73.3125 49.2055 73.2777M50.5144 41.0164C50.4789 40.7554 49.3809 40.6924 49.1447 40.7246C49.1301 40.7265 52.0743 42.8257 52.5053 43.072C53.5647 43.6772 55.7148 45.4122 57.0456 45.2311M48.3202 37.6499C48.2643 37.2397 51.3618 39.4704 51.8293 39.7768C53.8074 41.0729 56.6241 43.499 59.0475 43.8492M47.1239 33.4436C47.3908 35.4048 53.2445 37.4864 54.7551 38.391C55.326 38.7329 60.6765 42.216 60.5757 41.4751M48.3726 29.6604C48.2048 29.46 46.9566 28.4243 47.833 29.0217C49.988 30.4909 52.1024 32.0016 54.1907 33.5666C55.098 34.2467 62.9987 38.9825 62.9478 38.7854M49.3908 26.0365C48.5779 25.844 48.0297 25.402 49.0998 26.1693C51.4264 27.8378 53.895 29.3022 56.271 30.8984C58.6652 32.5068 60.9794 34.2758 63.5076 35.6743C63.734 35.7995 65.6035 36.9218 65.17 36.2834M50.4556 20.749C50.8704 23.7971 57.5257 26.6349 60.0568 28.1536C62.6396 29.7035 65.077 31.4461 67.6389 33.0209C67.9675 33.2229 69.8871 34.556 69.4639 33.4312M54.1037 18.8206C54.366 20.7478 59.1667 22.7766 60.5384 23.8149C62.1845 25.0611 66.577 29.3997 69.0016 29.0698M58.4042 17.7489C55.4646 14.4541 59.106 18.1022 60.5803 19.2054C62.9381 20.9696 65.4196 22.5716 67.9273 24.113C68.1182 24.2303 69.9142 25.1798 69.802 24.8918M60.9114 15.8986C60.8591 15.5143 60.2914 14.4833 60.4996 14.8105C61.7894 16.8374 65.1186 18.5629 67.0888 19.8478M49.1645 35.4153C48.0523 35.5666 49.6294 31.8168 49.6884 31.6514C51.7061 25.997 53.4452 20.0683 56.9248 15.0354M52.1241 41.7403C51.3089 41.8512 51.1221 41.8585 51.4962 40.8232C53.0696 36.4684 54.5427 32.0635 56.1726 27.7309C57.661 23.7744 59.5576 19.9383 60.8833 15.9252C61.9145 12.8038 60.2099 18.298 59.9956 18.9854M54.0467 44.5583C53.9861 45.5396 53.7004 47.7254 54.375 45.3925C55.6218 41.0814 56.9676 36.8358 58.66 32.6741C60.2959 28.6513 62.0437 24.7011 63.4732 20.5975C64.2272 18.4328 64.9009 17.2512 63.8669 20.2291M58.7918 45.1008C58.604 45.1263 59.8255 41.7722 59.92 41.5254C61.2171 38.1377 62.4724 34.7092 64.0542 31.441C65.598 28.2512 69.6694 18.4303 68.4043 21.7405M65.0849 37.949C64.7704 35.6378 67.8175 31.4758 68.8211 29.6325M56.2781 14.717C51.6209 17.2059 49.3652 20.868 48.2401 24.2831C47.0384 27.9311 46.679 32.6029 47.1992 36.4253C47.8287 41.0512 50.3666 47.7074 56.1614 46.9188C64.1627 45.83 71.8027 31.4705 70.6032 23.8388C69.4037 16.2071 60.9353 12.2282 56.2781 14.717Z"
        strokeWidth="0.979972"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
