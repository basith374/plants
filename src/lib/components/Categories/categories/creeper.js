export default function Creeper({ active }) {
  return (
    <svg width="41" height="41" viewBox="0 0 41 41">
      <path
        d="M5.73348 27.1786C4.7481 25.262 4.87962 23.2346 4.52263 21.3054C4.40154 20.6477 4.81699 20.2635 5.48714 20.347C6.95478 20.5308 8.42659 20.7062 9.87753 20.9859C10.4892 21.1029 11.0508 21.4724 11.6896 21.7501C11.6542 19.7248 11.0508 17.8499 10.0425 16.0188C9.16355 16.9918 8.13432 17.5618 6.83787 17.52C5.2053 17.4657 4.00488 16.6932 3.31177 15.2359C2.72305 13.9956 2.23453 12.7074 1.71887 11.4359C1.43286 10.7323 1.67085 10.2771 2.41198 10.1748C3.8149 9.98061 5.21991 9.75511 6.63119 9.68621C7.39319 9.64863 8.1719 9.90335 9.0028 10.0349C9.05707 9.63193 9.15311 9.10995 9.18234 8.5838C9.19069 8.43974 9.02158 8.26644 8.89841 8.13908C6.87545 6.05535 7.47879 2.83999 10.1364 1.65823C11.3535 1.11747 12.5915 0.616372 13.8253 0.113188C14.4976 -0.160327 14.9339 0.0756054 15.0362 0.795931C15.2408 2.23867 15.4621 3.6835 15.579 5.13459C15.7502 7.24754 13.9423 9.18303 11.8191 9.24149C11.4683 9.25193 11.1155 9.24358 10.7627 9.24358C10.389 10.3669 10.6562 13.1083 11.2951 14.6763C11.3306 14.6763 11.3911 14.6909 11.4015 14.6742C12.5164 13.006 14.2992 12.8849 16.0425 12.6656C16.7669 12.5738 17.4871 12.4589 18.2116 12.3838C18.9318 12.3086 19.3139 12.7199 19.2157 13.4361C19.0425 14.6951 18.8817 15.9541 18.6792 17.2089C18.2512 19.871 16.1615 21.2323 13.5268 20.5892C13.4475 20.5704 13.3681 20.5558 13.2011 20.5224C13.4203 22.7794 13.2074 24.955 12.3869 27.1264C16.5999 27.1264 20.7314 27.1264 24.9318 27.1264C24.0383 25.5125 24.1427 23.7086 23.8274 21.9881C23.7794 21.723 23.7481 21.4515 23.7418 21.1822C23.7272 20.6498 24.0174 20.2927 24.531 20.3554C26.1823 20.5621 27.8316 20.8001 29.4663 21.1049C29.9506 21.1947 30.3869 21.5413 30.9047 21.8002C30.8817 19.7248 30.2471 17.8687 29.2742 16.0397C29.0967 16.2026 28.9485 16.3362 28.8024 16.4719C26.865 18.2758 23.7001 17.7079 22.5665 15.3131C21.961 14.0353 21.4454 12.7137 20.9109 11.4025C20.6416 10.7385 20.888 10.2896 21.6082 10.1873C23.0529 9.98478 24.4997 9.75511 25.9527 9.68204C26.6917 9.64445 27.4454 9.92214 28.2304 10.062C28.2805 9.66116 28.3661 9.17676 28.3848 8.6882C28.3911 8.5149 28.2638 8.30193 28.1364 8.16622C26.0508 5.95305 26.6938 2.80658 29.4955 1.59769C30.6437 1.10285 31.7961 0.620548 32.9506 0.142418C33.7418 -0.185382 34.1719 0.0797812 34.2825 0.944172C34.4203 2.01735 34.4871 3.10724 34.7105 4.16372C35.3264 7.06172 33.199 9.65072 30.0091 9.21226C29.5936 10.3648 29.8838 13.3797 30.5581 14.7264C30.6207 14.6742 30.6875 14.6387 30.7272 14.5823C31.4642 13.5488 32.4892 13.0289 33.7293 12.8703C34.9276 12.7158 36.1239 12.5425 37.3222 12.39C38.1448 12.2856 38.5164 12.6427 38.412 13.4591C38.2408 14.8016 38.0717 16.1441 37.8525 17.4803C37.4725 19.7833 35.222 21.2219 32.959 20.6435C32.8003 20.6038 32.6416 20.5684 32.412 20.5141C32.6875 22.7815 32.3848 24.9467 31.6103 27.1411C31.9109 27.1578 32.1448 27.1828 32.3807 27.1828C34.5498 27.1849 36.7168 27.1828 38.8859 27.187C39.888 27.1891 40.1364 27.5106 39.9443 28.5107C39.2658 32.0268 38.5957 35.5428 37.913 39.0588C37.7564 39.8626 37.5769 40.0025 36.7898 40.0025C32.4746 40.0046 28.1594 40.0025 23.842 40.0025C23.7168 40.0025 23.5894 40.0109 23.4683 39.9921C23.0091 39.9211 22.7606 39.6413 22.7731 39.1799C22.7857 38.7414 23.055 38.4992 23.483 38.447C23.6688 38.4241 23.8567 38.4345 24.0445 38.4345C27.9422 38.4345 31.842 38.4241 35.7397 38.445C36.2805 38.447 36.4913 38.2925 36.5894 37.7455C37.1281 34.7765 37.7084 31.818 38.2867 28.7989C26.1051 28.7989 13.9673 28.7989 1.75227 28.7989C1.96939 29.9639 2.18025 31.1185 2.39946 32.2731C2.75436 34.1334 3.13223 35.9896 3.46 37.8562C3.54559 38.3406 3.76062 38.4429 4.20739 38.4408C8.12597 38.4241 12.0466 38.4283 15.9652 38.4262C16.8859 38.4262 17.2658 38.6621 17.2596 39.2258C17.2533 39.7833 16.888 39.9984 15.9485 39.9984C11.7377 39.9984 7.52472 39.9984 3.31386 39.9984C2.43077 39.9984 2.27837 39.8919 2.10509 39.0045C1.40572 35.43 0.716784 31.8514 0.0341119 28.2727C-0.0994998 27.5774 0.219916 27.1933 0.942254 27.1849C2.27628 27.1703 3.61031 27.1786 4.94434 27.1786C5.18234 27.1786 5.42242 27.1786 5.73348 27.1786ZM25.3995 22.009C25.5832 23.2492 25.6729 24.3746 25.9318 25.4603C26.2721 26.8863 28.0153 27.6275 29.2241 26.7966C28.7105 26.333 28.1949 25.9113 27.7335 25.4373C27.2972 24.9884 27.389 24.2973 27.9193 24.1637C28.2011 24.0927 28.6207 24.2117 28.8608 24.3976C29.3744 24.7984 29.8107 25.2954 30.2972 25.7714C30.9443 24.4686 30.2262 22.8504 28.8546 22.5352C27.7669 22.2846 26.6437 22.1907 25.3995 22.009ZM3.45582 11.6154C3.97983 12.7888 4.37858 13.9121 4.96104 14.931C5.63119 16.1086 7.28255 16.2923 8.38902 15.3695C7.83369 15.0438 7.30133 14.7348 6.77106 14.4195C6.18025 14.0687 6.00697 13.6407 6.27211 13.2085C6.52472 12.7951 6.95478 12.7387 7.53098 13.0561C8.07169 13.3547 8.60614 13.6616 9.15937 13.9769C9.47879 12.5028 8.36396 11.1791 6.84413 11.2396C5.76897 11.2835 4.69799 11.4714 3.45582 11.6154ZM28.3577 13.9748C28.7168 12.6803 27.6792 11.2501 26.3201 11.2542C25.1468 11.2584 23.9736 11.4672 22.6583 11.5987C23.2032 12.8076 23.5936 13.9581 24.2116 14.9707C24.9422 16.1629 26.7105 16.3049 27.5539 15.3319C27.0258 15.0292 26.5059 14.7327 25.9882 14.4299C25.3974 14.0833 25.2241 13.6595 25.4892 13.221C25.7439 12.7993 26.1719 12.7345 26.7439 13.0519C27.2805 13.3484 27.8107 13.6616 28.3577 13.9748ZM13.6667 18.8605C15.0905 19.5975 16.6667 18.8918 17.0174 17.4699C17.2095 16.6869 17.27 15.8727 17.3828 15.0709C17.4287 14.7556 17.46 14.4404 17.5059 14.0541C16.3118 14.2232 15.2074 14.3109 14.1364 14.5468C12.6938 14.8642 11.9088 16.641 12.723 17.8269C13.1489 17.376 13.5498 16.9312 13.9736 16.5053C14.4475 16.0293 14.9276 15.9791 15.2721 16.3424C15.6145 16.7036 15.5748 17.1275 15.0988 17.5889C14.6562 18.0169 14.174 18.4116 13.6667 18.8605ZM9.86292 6.807C10.2053 6.21403 10.5101 5.67535 10.8274 5.14503C11.151 4.60217 11.5853 4.43932 12.007 4.68569C12.4329 4.93415 12.4976 5.36635 12.1823 5.93843C11.8838 6.47711 11.5769 7.01161 11.2617 7.56491C12.6312 7.84051 13.9464 6.92392 13.9736 5.56052C13.9965 4.37459 13.7669 3.18449 13.6354 1.86702C12.4329 2.39735 11.3285 2.78361 10.3285 3.35361C9.12806 4.03635 8.92555 5.63568 9.86292 6.807ZM6.20321 22.0153C6.34309 23.0676 6.46626 24.0113 6.59778 24.9529C6.62701 25.1576 6.67085 25.3643 6.73766 25.5584C7.20739 26.9156 8.70843 27.5607 10.0153 26.8488C9.53307 26.3999 9.07169 25.9885 8.63119 25.5563C8.16981 25.1033 8.11762 24.6544 8.45165 24.3057C8.80655 23.934 9.25749 23.9862 9.75019 24.4644C10.1886 24.8903 10.6207 25.3246 11.078 25.7756C11.7544 24.3621 10.9652 22.7878 9.46835 22.4934C8.43077 22.2888 7.3744 22.1823 6.20321 22.0153ZM32.8358 1.88373C31.6938 2.37438 30.6771 2.75021 29.7189 3.23878C28.3911 3.91734 28.0717 5.69415 29.0884 6.76524C29.4412 6.16601 29.769 5.57096 30.1343 5.00096C30.485 4.45602 31.2053 4.40591 31.4537 4.93415C31.5706 5.1847 31.5331 5.58766 31.4141 5.85491C31.1531 6.44579 30.7982 6.99282 30.4642 7.58996C31.9464 7.78622 33.2032 6.8404 33.2074 5.45195C33.2095 4.30569 32.9777 3.15735 32.8358 1.88373ZM32.9193 18.898C34.2345 19.5286 35.7377 18.9983 36.1218 17.7246C36.4683 16.5721 36.5623 15.3423 36.7857 14.0353C35.5059 14.2274 34.3535 14.3026 33.2554 14.5886C31.8462 14.9561 31.1552 16.6556 31.9402 17.8311C32.3807 17.3634 32.8045 16.9083 33.2303 16.4594C33.5915 16.0794 33.9986 15.9395 34.4391 16.3069C34.8212 16.6243 34.7857 17.1066 34.341 17.5576C33.9047 17.9981 33.4391 18.4116 32.9193 18.898Z"
        fill={active ? "white" : "#000"}
      />
      <path
        d="M20.7747 39.2171C20.7747 39.6576 20.4135 40.0251 19.9814 39.9875C19.5242 39.9499 19.2653 39.6806 19.2486 39.2192C19.2319 38.7786 19.6014 38.4278 20.0398 38.4445C20.4532 38.4612 20.7747 38.7974 20.7747 39.2171Z"
        fill={active ? "white" : "#000"}
      />
    </svg>
  );
}
