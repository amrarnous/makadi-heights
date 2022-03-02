import React from 'react'
import Slider from "../../components/Base/Slider/Slider";

function Features() {
  return (
    <section className="features mt-[120px] pb-16">
        <div className="container max-w-[85.69%] w-full mx-auto flex justify-center flex-wrap xl:justify-between xl:flex-nowrap">
          <div className="features-details sm:w-full xl:w-1/2 ">
            <h1 className="text-[32px] xl:text-[50px] font-di-medium leading-[53px] text-[#21436E] mb-4">
              Discover Lifestyle
              <br />
              <b className="text-[40px] xl:text-[95px]">Amentities</b>
            </h1>
            <p className="text-lg text-[#21436E] max-w-[470px] mb-14">
              Occupying a land area of 33,000 square meters, Makadi Heights’
              stunning clubhouse
            </p>
            <div className="features-container relative flex items-center justify-between flex-wrap">
              <div className="absolute left-1/2 h-full w-[2px] border-dashed border border-gray-300"></div>
              <div className="feature group flex items-center justify-center flex-col w-1/2  mb-6">
                <div className="feature-icon">
                  <svg
                    width="43"
                    height="38"
                    viewBox="0 0 43 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.085 14.827V15.0623H16.366C15.692 15.0623 15.0629 15.5801 14.973 16.3332L13.4452 27.7709C13.2655 29.1359 14.2541 30.3126 15.5572 30.3126H27.1054C28.4085 30.3126 29.397 29.0888 29.2173 27.7709L27.6895 16.3332C27.5997 15.6272 27.0155 15.0623 26.2966 15.0623H25.5776V14.9682C25.5776 12.8501 24.2296 10.9203 22.2524 10.4967C19.4665 9.88476 17.085 12.0499 17.085 14.827ZM24.2745 17.4628C24.8137 17.4628 25.2181 17.8865 25.2181 18.4513C25.2181 20.7106 23.4657 22.5463 21.3088 22.5463C19.1519 22.5463 17.3995 20.7106 17.3995 18.4513C17.3995 17.8865 17.8039 17.4628 18.3431 17.4628C18.8823 17.4628 19.2868 17.8865 19.2868 18.4513C19.2868 19.628 20.1854 20.5694 21.3088 20.5694C22.4322 20.5694 23.3309 19.628 23.3309 18.4513C23.3309 17.9335 23.7353 17.4628 24.2745 17.4628ZM23.6454 14.827V15.0623H18.9722V14.827C18.9722 13.462 20.0057 12.3794 21.3088 12.3794C22.6119 12.3323 23.6454 13.462 23.6454 14.827Z"
                      fill="#268FB4"
                      className="group-hover:fill-[#21436E]"
                    />
                    <path
                      d="M42.6542 16.2858C42.6093 15.8622 42.3846 15.5327 42.0701 15.2973L33.847 9.13134V2.77706C33.847 1.92982 33.173 1.22379 32.3642 1.22379C31.5554 1.22379 30.8813 1.92982 30.8813 2.77706V6.87204L22.164 0.282412C21.6697 -0.0941375 20.9508 -0.0941375 20.4565 0.282412L0.595384 15.2973C0.280842 15.5327 0.0561683 15.9092 0.0112337 16.2858C-0.033701 16.7094 0.0561684 17.086 0.280842 17.4154C0.730188 18.1215 1.62888 18.2627 2.3029 17.792L5.31352 15.4856V35.9605C5.31352 36.8078 5.98754 37.5138 6.79637 37.5138H35.8242C36.633 37.5138 37.307 36.8078 37.307 35.9605V15.4856L40.3176 17.792C40.9467 18.2627 41.8903 18.1215 42.3846 17.4625C42.6093 17.086 42.6991 16.7094 42.6542 16.2858ZM34.3862 34.4073H8.23427V13.2734L8.36908 13.1322L21.3103 3.38895L34.3862 13.2734V34.4073Z"
                      fill="#268FB4"
                      className="group-hover:fill-[#21436E]"
                    />
                  </svg>
                </div>
                <h3 className="feature-title mt-4 text-sm lg:text-lg text-[#268FB4] uppercase font-di-medium mb-1 group-hover:text-[#21436E]">
                  Commercial Areas
                </h3>
                <p className="text-center text-sm lg:text-base border-dashed border-b border-gray-300 pb-3 max-w-[242px] w-full font-sharp-medium text-[#757575]">
                  Downtown <br />
                  Makadi Heights Mall
                </p>
              </div>
              <div className="feature group flex items-center justify-center flex-col w-1/2 mb-6">
                <div className="feature-icon">
                  <svg
                    width="59"
                    height="31"
                    viewBox="0 0 59 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.938529 19.35C0.714948 19.3801 0.506042 19.4833 0.341322 19.645C0.176601 19.8068 0.0643923 20.019 0.020545 20.2515C-0.0233023 20.484 0.00342853 20.7249 0.0969617 20.9405C0.190495 21.1561 0.346103 21.3355 0.541804 21.4531C0.541804 21.4531 1.47224 22.047 2.66949 22.6381C3.86674 23.2295 5.29113 23.873 6.70251 23.8737C8.10967 23.8744 9.19205 23.1478 10.0687 22.5882C10.9454 22.0283 11.6191 21.6367 12.2916 21.6367C12.9648 21.6367 13.6538 22.0289 14.5304 22.5882C15.4071 23.1478 16.4739 23.8737 17.8807 23.8737C19.2877 23.8737 20.3544 23.1478 21.231 22.5882C22.1077 22.0283 22.7971 21.6367 23.4699 21.6367C24.143 21.6367 24.8321 22.0289 25.7087 22.5882C26.5853 23.1478 27.6521 23.8737 29.059 23.8737C30.4659 23.8737 31.5326 23.1478 32.4093 22.5882C33.2859 22.0283 33.9754 21.6367 34.6481 21.6367C35.3212 21.6367 35.9944 22.0289 36.871 22.5882C37.7477 23.1478 38.8145 23.8737 40.2213 23.8737C41.6282 23.8737 42.695 23.1478 43.5716 22.5882C44.4483 22.0283 45.1377 21.6367 45.8105 21.6367C46.4836 21.6367 47.1726 22.0289 48.0493 22.5882C48.9259 23.1478 49.9927 23.8737 51.3996 23.8737C52.8088 23.8744 54.2349 23.2256 55.4326 22.6381C56.6303 22.0502 57.5603 21.4699 57.5603 21.4699C57.6823 21.3937 57.7887 21.2928 57.8734 21.1732C57.9582 21.0536 58.0196 20.9176 58.0541 20.7729C58.0887 20.6283 58.0957 20.4777 58.0747 20.3302C58.0537 20.1827 58.0051 20.0411 57.9318 19.9133C57.8585 19.7856 57.7619 19.6745 57.6475 19.5862C57.5332 19.498 57.4034 19.4344 57.2655 19.3991C57.1277 19.3638 56.9845 19.3572 56.8444 19.3803C56.7042 19.4034 56.5698 19.4556 56.4488 19.5335C56.4488 19.5335 55.6113 20.0702 54.5276 20.6018C53.4438 21.1334 52.0757 21.6037 51.3996 21.6033C50.7264 21.6033 50.0374 21.2113 49.1608 20.652C48.2841 20.0921 47.2173 19.3665 45.8105 19.3665C44.4036 19.3665 43.3368 20.0921 42.4602 20.652C41.5835 21.2117 40.8941 21.6033 40.2213 21.6033C39.5482 21.6033 38.875 21.2113 37.9984 20.652C37.1218 20.0921 36.0549 19.3665 34.6481 19.3665C33.2412 19.3665 32.1585 20.0921 31.2819 20.652C30.4053 21.2117 29.7318 21.6033 29.059 21.6033C28.3858 21.6033 27.6968 21.2113 26.8201 20.652C25.9435 20.0921 24.8767 19.3665 23.4699 19.3665C22.063 19.3665 20.9962 20.0921 20.1196 20.652C19.2429 21.2117 18.5535 21.6033 17.8807 21.6033C17.2076 21.6033 16.5185 21.2113 15.6419 20.652C14.7653 20.0921 13.6985 19.3665 12.2916 19.3665C10.8846 19.3665 9.81794 20.0921 8.94133 20.652C8.06479 21.2117 7.37499 21.6037 6.70251 21.6033C6.02613 21.603 4.65759 21.1195 3.57456 20.585C2.49153 20.0499 1.66914 19.5167 1.66914 19.5167C1.45263 19.371 1.19365 19.3117 0.939098 19.3494L0.938529 19.35Z"
                      fill="#268FB4"
                      className="group-hover:fill-[#21436E]"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.05443 26.1269C0.82217 26.1359 0.598922 26.2237 0.418114 26.3773C0.237305 26.5308 0.108665 26.7417 0.051453 26.9785C-0.00575882 27.2153 0.011536 27.4653 0.100748 27.6909C0.18996 27.9166 0.34629 28.1057 0.54633 28.2301C0.54633 28.2301 1.47677 28.8243 2.67401 29.4156C3.87126 30.007 5.29565 30.65 6.70704 30.6506C8.11419 30.6513 9.19657 29.9251 10.0733 29.3654C10.9499 28.8055 11.6236 28.4139 12.2962 28.4139C12.9693 28.4139 13.6584 28.8055 14.535 29.3654C15.4116 29.9253 16.4784 30.6506 17.8853 30.6506C19.2922 30.6506 20.3589 29.9251 21.2356 29.3654C22.1122 28.8055 22.8017 28.4139 23.4744 28.4139C24.1475 28.4139 24.8366 28.8055 25.7132 29.3654C26.5898 29.9253 27.6567 30.6506 29.0635 30.6506C30.4704 30.6506 31.5372 29.9251 32.4138 29.3654C33.2904 28.8055 33.9799 28.4139 34.6526 28.4139C35.3257 28.4139 35.999 28.8055 36.8756 29.3654C37.7522 29.9253 38.819 30.6506 40.2259 30.6506C41.6327 30.6506 42.6996 29.9251 43.5762 29.3654C44.4528 28.8055 45.1423 28.4139 45.815 28.4139C46.4881 28.4139 47.1772 28.8055 48.0538 29.3654C48.9304 29.9253 49.9973 30.6506 51.4041 30.6506C52.8134 30.6516 54.2395 30.0199 55.4371 29.4322C56.6349 28.844 57.5648 28.2469 57.5648 28.2469C57.6857 28.1702 57.7911 28.0691 57.8749 27.9496C57.9587 27.8301 58.0193 27.6943 58.0532 27.5502C58.0871 27.406 58.0937 27.2562 58.0726 27.1093C58.0514 26.9625 58.003 26.8216 57.93 26.6944C57.857 26.5673 57.7609 26.4565 57.6472 26.3684C57.5335 26.2803 57.4044 26.2167 57.2673 26.181C57.1302 26.1454 56.9877 26.1384 56.8481 26.1606C56.7084 26.1828 56.5743 26.2337 56.4533 26.3105C56.4533 26.3105 55.6158 26.8474 54.5321 27.379C53.4484 27.9107 52.0802 28.3976 51.4041 28.3973C50.731 28.3973 50.0419 27.9887 49.1653 27.429C48.2887 26.8693 47.2218 26.1603 45.815 26.1603C44.4082 26.1603 43.3413 26.8698 42.4647 27.429C41.5881 27.9889 40.8986 28.3973 40.2259 28.3973C39.5527 28.3973 38.8795 27.9887 38.0029 27.429C37.1263 26.8693 36.0594 26.1603 34.6526 26.1603C33.2458 26.1603 32.1631 26.8698 31.2865 27.429C30.4098 27.9889 29.7363 28.3973 29.0635 28.3973C28.3904 28.3973 27.7013 27.9887 26.8247 27.429C25.9481 26.8693 24.8812 26.1603 23.4744 26.1603C22.0676 26.1603 21.0007 26.8698 20.1241 27.429C19.2475 27.9889 18.5581 28.3973 17.8853 28.3973C17.2121 28.3973 16.5231 27.9887 15.6465 27.429C14.7698 26.8693 13.703 26.1603 12.2962 26.1603C10.8892 26.1603 9.82247 26.8698 8.94585 27.429C8.06932 27.9889 7.37952 28.3976 6.70704 28.3973C6.03065 28.3969 4.66211 27.9134 3.57909 27.379C2.49606 26.844 1.67366 26.3105 1.67366 26.3105C1.48979 26.1844 1.27362 26.1206 1.05419 26.1275L1.05443 26.1269Z"
                      fill="#268FB4"
                      className="group-hover:fill-[#21436E]"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29.0096 0.00212927C28.9039 0.00212927 28.7982 0.0270368 28.6942 0.0360821L15.801 2.3065C12.7887 2.6509 13.5401 7.45117 16.4985 6.7626L28.0432 4.73979L30.2823 8.26425L13.2343 18.2237C14.5126 18.4639 15.4871 19.1137 16.196 19.5664C17.0727 20.1254 17.575 20.3655 17.8807 20.3655C19.2612 19.8518 20.4524 19.0733 21.7204 18.4399L34.391 11.0332C35.494 10.3921 35.8396 8.89707 35.1389 7.79581L30.8371 1.02071C30.4338 0.374656 29.7445 -0.00997891 29.0095 0.000196992L29.0096 0.00212927Z"
                      fill="#268FB4"
                      className="group-hover:fill-[#21436E]"
                    />
                    <path
                      d="M48.4145 7.92325C48.4145 8.66565 48.2754 9.40068 48.0052 10.0866C47.7349 10.7725 47.3388 11.3956 46.8395 11.9206C46.3402 12.4455 45.7474 12.8621 45.0949 13.1462C44.4425 13.4303 43.7433 13.5765 43.0371 13.5765C42.3309 13.5765 41.6317 13.4303 40.9792 13.1462C40.3268 12.8621 39.734 12.4455 39.2347 11.9206C38.7353 11.3956 38.3392 10.7725 38.069 10.0866C37.7988 9.40068 37.6597 8.66565 37.6597 7.92325C37.6597 7.18085 37.7988 6.44554 38.069 5.75965C38.3392 5.07376 38.7353 4.4506 39.2347 3.92565C39.734 3.40069 40.3268 2.98441 40.9792 2.70031C41.6317 2.41621 42.3309 2.26996 43.0371 2.26997C43.7433 2.26996 44.4425 2.41621 45.0949 2.70031C45.7474 2.98441 46.3402 3.40069 46.8395 3.92565C47.3388 4.4506 47.7349 5.07376 48.0052 5.75965C48.2754 6.44554 48.4145 7.18085 48.4145 7.92325Z"
                      fill="#268FB4"
                      className="group-hover:fill-[#21436E]"
                    />
                  </svg>
                </div>
                <h3 className="feature-title mt-4 text-sm lg:text-lg text-[#268FB4] group-hover:text-[#21436E] uppercase font-di-medium mb-1">
                  Sports Facilities
                </h3>
                <p className="text-center text-sm lg:text-base border-dashed border-b border-gray-300 pb-3 max-w-[242px] w-full font-sharp-medium text-[#757575]">
                  Sports Courts, Fitness Center <br /> Water Sports Activities
                </p>
              </div>
              <div className="feature group flex items-center justify-center flex-col w-1/2 mb-6">
                <div className="feature-icon">
                  <svg
                    width="38"
                    height="42"
                    viewBox="0 0 38 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.9921 9.4704C37.9859 9.39251 37.9735 9.31461 37.9487 9.24321C37.9425 9.21725 37.9301 9.19128 37.9239 9.16532C37.8867 9.07445 37.8372 8.99006 37.769 8.91866C37.769 8.91866 37.769 8.91866 37.7628 8.91217L29.4964 0.25315C29.1741 -0.0843833 28.6536 -0.0843833 28.3252 0.25315L20.0712 8.90568C20.0712 8.90568 20.0712 8.90568 20.065 8.91217C19.9968 8.98357 19.9472 9.06795 19.9101 9.15883C19.8977 9.18479 19.8915 9.21076 19.8853 9.23672C19.8605 9.31461 19.8481 9.38601 19.8419 9.46391C19.8419 9.48338 19.8295 9.49636 19.8295 9.51583V40.6727C19.8295 41.1531 20.2013 41.536 20.6537 41.536C21.106 41.536 21.4778 41.1531 21.4778 40.6792V25.9641H24.7807V28.5605V40.6727C24.7807 41.1531 25.1525 41.536 25.6048 41.536C26.0572 41.536 26.4352 41.1531 26.4352 40.6792V39.8159H31.3926V40.6792C31.3926 41.1531 31.7644 41.5425 32.2167 41.5425C32.6753 41.5425 33.0409 41.1531 33.0409 40.6792V25.9641H36.3499V40.6792C36.3499 41.1531 36.7217 41.5425 37.1741 41.5425C37.6327 41.5425 37.9983 41.1531 37.9983 40.6792V9.52233C38.0045 9.50285 37.9921 9.48338 37.9921 9.4704ZM31.3926 38.0828H26.4352V36.3497H31.3926V38.0828ZM31.3926 34.6166H26.4352V32.8835H31.3926V34.6166ZM31.3926 31.1569H26.4352V29.4238H31.3926V31.1569ZM31.3926 27.6972H26.4352V25.9641H31.3926V27.6972ZM26.4352 24.231V18.1749C26.4352 16.7403 27.5444 15.5784 28.9139 15.5784C29.2547 15.5784 29.5831 15.6498 29.8806 15.7797C30.7667 16.1756 31.3926 17.1038 31.3926 18.1749V24.231H26.4352ZM22.649 8.65253L28.9139 2.09011L35.1788 8.65253H22.649Z"
                      fill="#268FB4"
                      className="group-hover:fill-[#21436E]"
                    />
                    <path
                      d="M14.2834 23.7765L7.02088 35.9601C6.89075 36.2003 6.64288 36.3496 6.38262 36.3496H0.824163C0.365606 36.3496 0 36.739 0 37.2129V40.6726C0 41.1529 0.371803 41.5359 0.824163 41.5359H6.38262C8.43373 41.5359 10.3361 40.374 11.3214 38.5306L18.175 27.0414V20.8815C16.539 21.206 15.1014 22.2576 14.2834 23.7765Z"
                      fill="#268FB4"
                      className="group-hover:fill-[#21436E]"
                    />
                  </svg>
                </div>
                <h3 className="feature-title mt-4 text-sm lg:text-lg text-[#268FB4] group-hover:text-[#21436E] uppercase font-di-medium mb-1">
                  Kids Friendly Areas
                </h3>
                <p className="text-center text-sm lg:text-base border-dashed border-b border-gray-300 pb-3 max-w-[242px] w-full font-sharp-medium text-[#757575]">
                  Kids Aqua Park <br />
                  Kids Areas
                </p>
              </div>
              <div className="feature group flex items-center justify-center flex-col w-1/2 mb-6">
                <div className="feature-icon">
                  <svg
                    width="49"
                    height="45"
                    viewBox="0 0 49 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M45.6267 32.4473H26.5071V30.7182H45.6273L45.6267 32.4473ZM47.3006 33.9945H48.9744V42.0276V43.8635V45H0V42.0276H15.8737C16.1811 41.2169 16.3498 40.2315 16.3498 39.345C16.3498 38.6681 16.3928 36.8389 16.4483 34.7434L11.6739 29.1356C11.5857 29.1378 11.4997 29.1485 11.4094 29.1485C6.23009 29.1485 2.03081 25.0699 2.03081 20.0391C2.03081 19.0807 2.18589 18.1588 2.46885 17.2908C1.33972 15.9717 0.658978 14.2774 0.658978 12.4285C0.658978 8.22518 4.16881 4.81736 8.49706 4.81736C9.15277 4.81736 9.78618 4.90387 10.394 5.05106C11.0845 2.15952 13.7477 0 16.9354 0C20.0382 0 22.642 2.04379 23.4141 4.81904C23.425 4.81904 23.437 4.81736 23.4484 4.81736C27.0453 4.81736 29.9609 7.64934 29.9609 11.1414C29.9609 12.6071 29.4445 13.9538 28.5815 15.0251C28.9248 15.97 29.1191 16.9824 29.1191 18.0419C29.1191 23.0722 24.9198 27.1502 19.741 27.1502C19.6801 27.1502 19.6208 27.1424 19.5593 27.1401C19.6453 30.4592 19.8227 37.5956 19.8227 39.345C19.8227 40.3326 19.9767 41.2731 20.301 42.0276H23.333V33.9945H25.0069V37.2686H47.3006V33.9945ZM16.531 31.785C16.5768 30.1839 16.6236 28.6676 16.6557 27.5912C15.7681 28.1738 14.7691 28.6008 13.7014 28.8631L16.531 31.785ZM28.1799 38.9967V42.0276H43.954V38.9967H28.1799ZM25.0085 42.0276H26.5071V38.9967H25.0085V42.0276ZM47.3006 42.0276V38.9967H45.6267V42.0276H47.3006ZM26.5071 35.7215H45.6273V33.9945H26.5071V35.7215ZM44.7904 10.9965C47.1145 10.9965 49 9.04989 49 6.65048C49 4.24939 47.115 2.3039 44.7904 2.3039C42.4641 2.3039 40.5808 4.24939 40.5808 6.64992C40.5808 9.04989 42.4641 10.9965 44.7904 10.9965Z"
                      fill="#268FB4"
                      className="group-hover:fill-[#21436E]"
                    />
                  </svg>
                </div>
                <h3 className="feature-title mt-4 text-sm lg:text-lg text-[#268FB4] group-hover:text-[#21436E] uppercase font-di-medium mb-1">
                  Central Park
                </h3>
                <p className="text-center text-sm lg:text-base border-dashed border-b border-gray-300 pb-3 max-w-[242px] w-full font-sharp-medium text-[#757575]">
                  Far far away, behind <br /> the word mountains
                </p>
              </div>
              <div className="feature group flex items-center justify-center flex-col w-1/2 mb-6">
                <div className="feature-icon">
                  <svg
                    width="37"
                    height="34"
                    viewBox="0 0 37 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.1287 10.6076C34.9058 10.6076 34.6792 10.5655 34.4586 10.4768L18.5 4.05813L2.54142 10.4768C1.57664 10.8649 0.494852 10.3601 0.124851 9.34996C-0.245612 8.33984 0.236314 7.20619 1.20063 6.81862L17.8294 0.130079C18.2609 -0.0433597 18.7386 -0.0433597 19.1706 0.130079L35.7994 6.81862C36.7637 7.20668 37.2456 8.33984 36.8751 9.34996C36.5893 10.1295 35.8803 10.6076 35.1287 10.6076Z"
                      fill="#268FB4"
                      className="group-hover:fill-[#21436E]"
                    />
                    <path
                      d="M7.62628 22.252C9.56322 22.252 11.1334 20.6072 11.1334 18.5783C11.1334 16.5494 9.56322 14.9046 7.62628 14.9046C5.68934 14.9046 4.11914 16.5494 4.11914 18.5783C4.11914 20.6072 5.68934 22.252 7.62628 22.252Z"
                      fill="#268FB4"
                      className="group-hover:fill-[#21436E]"
                    />
                    <path
                      d="M14.1726 27.5193H5.75512C4.72189 27.5193 3.88477 26.642 3.88477 25.5602C3.88477 24.4783 4.72235 23.601 5.75512 23.601H12.3023V16.7429C12.3023 15.6606 13.1399 14.7837 14.1726 14.7837C15.2059 14.7837 16.0434 15.6611 16.0434 16.7429V25.5602C16.0434 26.6425 15.2059 27.5193 14.1726 27.5193Z"
                      fill="#268FB4"
                      className="group-hover:fill-[#21436E]"
                    />
                    <path
                      d="M32.8794 23.0486V27.5183H17.3301V18.5784H27.0921C30.3074 18.5784 32.8794 19.3134 32.8794 23.0486Z"
                      fill="#268FB4"
                      className="group-hover:fill-[#21436E]"
                    />
                    <path
                      d="M33.6739 33.8871H3.32738C2.29416 33.8871 1.45703 33.0097 1.45703 31.9279C1.45703 30.8461 2.29462 29.9688 3.32738 29.9688H33.6739C34.7071 29.9688 35.5442 30.8461 35.5442 31.9279C35.5442 33.0097 34.7071 33.8871 33.6739 33.8871Z"
                      fill="#268FB4"
                      className="group-hover:fill-[#21436E]"
                    />
                  </svg>
                </div>
                <h3 className="feature-title mt-4 text-sm lg:text-lg text-[#268FB4] group-hover:text-[#21436E] uppercase font-di-medium mb-1">
                  Hotels
                </h3>
                <p className="text-center text-sm lg:text-base pb-3 max-w-[242px] w-full font-sharp-medium text-[#757575]">
                  Far far away, behind <br /> the word mountains
                </p>
              </div>
              <div className="feature group flex items-center justify-center flex-col w-1/2 mb-6">
                <div className="feature-icon">
                  <svg
                    width="32"
                    height="35"
                    viewBox="0 0 32 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.6438 18.4842C31.6438 15.8751 29.6091 13.7438 27.1183 13.7438C24.6275 13.7438 22.5927 15.8751 22.5927 18.4842C22.5927 20.6156 23.9258 22.3795 25.7852 22.9675V24.4742C25.7852 28.6634 22.5225 32.081 18.5232 32.081C14.5239 32.081 11.2613 28.7002 11.2613 24.5109V21.5711C16.0324 21.3506 19.8563 17.2716 19.8563 12.2371V2.8296C19.8563 2.05789 19.2599 1.43317 18.5232 1.43317H15.5763V1.39642C15.5763 0.624716 14.9799 0 14.2432 0C13.5065 0 12.9101 0.624716 12.9101 1.39642V4.29952C12.9101 5.07122 13.5065 5.69594 14.2432 5.69594C14.9799 5.69594 15.5763 5.07122 15.5763 4.29952V4.22602H17.2252V12.2371C17.2252 15.8751 14.3836 18.8517 10.9105 18.8517H8.98095C5.50785 18.8517 2.66622 15.8751 2.66622 12.2371V4.22602H4.31507V4.26277C4.31507 5.03448 4.91146 5.65919 5.64818 5.65919C6.3849 5.65919 6.98129 5.03448 6.98129 4.26277V1.39642C6.98129 0.624716 6.3849 0 5.64818 0C4.91146 0 4.31507 0.624716 4.31507 1.39642V1.43317H1.33311C0.596391 1.43317 0 2.05789 0 2.8296V12.2371C0 17.2716 3.82392 21.3873 8.59505 21.5711V24.5109C8.59505 30.2436 13.0504 34.9106 18.5232 34.9106C23.996 34.9106 28.4514 30.2436 28.4514 24.5109V23.0043C30.2756 22.3795 31.6438 20.6156 31.6438 18.4842ZM27.1183 20.4319C26.1009 20.4319 25.2589 19.5499 25.2589 18.4842C25.2589 17.4186 26.1009 16.5366 27.1183 16.5366C28.1356 16.5366 28.9776 17.4186 28.9776 18.4842C28.9776 19.5499 28.1356 20.4319 27.1183 20.4319Z"
                      fill="#268FB4"
                      className="group-hover:fill-[#21436E]"
                    />
                    <path
                      d="M5.96399 9.04017C5.47285 9.88538 5.64826 11.2083 6.31481 11.9065L9.6125 15.3608C9.78791 15.5446 10.0686 15.5446 10.244 15.3608L13.5417 11.9065C14.524 10.8776 14.3836 9.11367 13.1207 8.26846C12.3138 7.75399 11.0509 7.93773 10.3843 8.63594L9.89316 9.15041L9.40201 8.59919C8.41972 7.57025 6.73579 7.71724 5.96399 9.04017Z"
                      fill="#268FB4"
                      className="group-hover:fill-[#21436E]"
                    />
                  </svg>
                </div>
                <h3 className="feature-title mt-4 text-sm lg:text-lg text-[#268FB4] group-hover:text-[#21436E] uppercase font-di-medium mb-1">
                  Medical Facilities
                </h3>
                <p className="text-center text-sm lg:text-base pb-3 max-w-[242px] w-full font-sharp-medium text-[#757575]">
                  Far far away, behind <br /> the word mountains
                </p>
              </div>
            </div>
          </div>
          <div className="sm:w-full xl:w-1/2 mt-3 xl:mt-0">
            <Slider />
          </div>
        </div>
      </section>
  )
}

export default Features