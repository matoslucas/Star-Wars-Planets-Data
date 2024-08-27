type MainProps = {
  children: React.ReactNode;
};
const Main: React.FC<MainProps> = (props) => {
  const { children } = props;
  return (
    <div className="min-h-full">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.0"
                  width="100"
                  height="100"
                  viewBox="0 0 974 822"
                  id="s1"
                >
                  <path
                    fill="#fff"
                    d="M487.14284,110.93358C321.54286,110.93358 187.14286,245.33362 187.14286,410.93362C187.14286,576.53362 321.54284,710.93366 487.14284,710.93362C652.74284,710.93362 787.14286,576.53366 787.14286,410.93362C787.14286,245.3336 652.74284,110.93358 487.14284,110.93358zM472.98468,135.80606C473.15348,135.7975 473.32602,135.8143 473.49488,135.80606L474.7704,156.15044C457.46708,156.9754 440.62572,159.49878 424.38774,163.61218L429.42602,183.44638C386.80408,194.2423 348.84062,216.68778 319.09438,247.22188L304.48978,232.93618C292.61156,245.12214 281.99204,258.50792 272.7296,272.85964L255.63776,261.57136C302.31874,189.39406 381.83314,140.43148 472.98468,135.80606zM500.7908,135.80606C592.15428,140.27534 671.88054,189.26038 718.64796,261.57136L701.55612,272.85964C692.3145,258.54406 681.70474,245.1604 669.85968,232.99994L655.2551,247.22188C625.50422,216.67148 587.4965,194.24604 544.8597,183.44638L549.89796,163.61218C533.65998,159.49878 516.81864,156.9754 499.5153,156.15044L500.7908,135.80606zM487.14284,225.72952C495.81632,225.70964 504.48982,226.23972 511.63266,227.26016L500.47194,320.1173C523.9314,323.53822 544.4998,335.8161 558.69898,353.47188L633.18876,297.60452C642.23686,308.87632 652.49448,326.55928 657.8699,339.95148L572.28316,376.5586C576.58506,387.18706 578.9796,398.7686 578.9796,410.93362C578.9796,422.65322 576.80084,433.85232 572.79336,444.16066L657.67856,480.44894C652.44098,493.92068 642.29036,511.57208 633.3801,522.92342L559.4005,467.56628C545.2202,485.62538 524.41626,498.23626 500.66324,501.74994L511.63266,593.07648C497.34694,595.27646 476.93878,595.24488 462.65306,593.20404L473.62244,501.74994C449.85228,498.23372 429.06618,485.58252 414.8852,467.5025L341.09694,522.85964C332.04886,511.58784 321.79124,493.90488 316.4158,480.5127L401.49234,444.09688C397.4985,433.80382 395.30612,422.63222 395.30612,410.93362C395.30612,398.7476 397.6865,387.13824 402.00254,376.49484L316.60714,340.01524C321.84474,326.5435 331.99534,308.8921 340.90562,297.54074L415.58672,353.47188C429.7859,335.8161 450.3543,323.53822 473.81378,320.1173L462.65306,227.38768C469.79592,226.2877 478.46938,225.74942 487.14284,225.72952zM241.9898,285.16832L260.35714,294.22444C252.6104,309.24278 246.2766,325.09906 241.60714,341.6734L261.25,347.22188C255.53952,367.48714 252.44898,388.85 252.44898,410.93362C252.44898,433.03866 255.5288,454.4264 261.25,474.70912L241.60714,480.2576C246.27338,496.80526 252.61992,512.64756 260.35714,527.6428L241.9898,536.69892C222.59162,498.98758 211.63266,456.23444 211.63266,410.93362C211.63266,365.63278 222.59162,322.87966 241.9898,285.16832zM732.29592,285.16832C751.6941,322.87966 762.65302,365.63278 762.65302,410.93362C762.65302,456.23444 751.6941,498.98758 732.29592,536.69892L713.92856,527.6428C721.66906,512.6431 728.0108,496.81066 732.67858,480.2576L713.03572,474.70912C718.7569,454.4264 721.83674,433.03866 721.83674,410.93362C721.83674,388.85 718.74622,367.48714 713.03572,347.22188L732.67858,341.6734C728.01042,325.1037 721.67212,309.23918 713.92856,294.22444L732.29592,285.16832zM272.7296,549.00762C281.99558,563.35906 292.61104,576.74454 304.48978,588.93108L319.09438,574.64536C348.84062,605.17944 386.80408,627.62496 429.42602,638.42088L424.38774,658.25504C440.62572,662.36842 457.46708,664.89184 474.7704,665.7168L473.49488,686.06118C382.13144,681.59186 302.40516,632.60682 255.63776,560.29588L272.7296,549.00762zM701.6199,549.00762L718.64796,560.29588C671.88054,632.60682 592.15428,681.59186 500.7908,686.06118L499.5153,665.7168C516.81864,664.89184 533.65998,662.36842 549.89796,658.25504L544.8597,638.42088C587.4965,627.62118 625.50422,605.19574 655.2551,574.64536L669.85968,588.8673C681.71956,576.69162 692.36698,563.34254 701.6199,549.00762z"
                  />
                </svg>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    aria-current="page"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Calendar
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Reports
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>

                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>

                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-1"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-2"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <a
              href="#"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Team
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Reports
            </a>
          </div>
        </div>
      </nav>

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
};
export default Main;
