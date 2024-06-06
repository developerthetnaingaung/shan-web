function WelcomeScreen() {
  return (
    <>
      <div className="flex mx-auto flex-col cursor-pointer bg-white justify-center text-center items-center md:min-h-[200px] w-full card-item-div max-w-screen-md min-h-[100px]">
        <div className="text-center sm:text-2xl">
          <p className="bg-slate-500 text-white font-bold md:text-3xl sm:text-2xl px-5 py-5 w-screen border-2 border--blue-700 shadow-2xl">
            အမ်နိုင်း စလော့ ကစားရန် ဗိုက်ဗာနှင့် တယ်လီဂရမ် တို့မှ အကောင့်ဖွင့်ပါ{" "}
          </p>
        </div>
        <div className="text-center my-10">
          <svg
            className={"sm:w-[100px] md:w-[150px] w-[80px]"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z"></path>
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center gap-9 mb-10">
          <div className="text-white bg-gradient-to-l from-fuchsia-800 to-cyan-300 md:text-3xl sm:text-2xl px-10 py-4 rounded-3xl">
            <a href="viber://pa?chatURI=taungpawclub" target="_blank">
              {" "}
              Viber သို့ ဆက်သွယ်ရန် နှိပ်ပါ
            </a>
          </div>
          <div className="text-white bg-gradient-to-r from-fuchsia-500 to-cyan-500 md:text-3xl sm:text-2xl px-5 py-4 rounded-3xl">
            <a href="https://t.me/M9sialucky9bot" target="_blank">
              {" "}
              Telegram သို့ ဆက်သွယ်ရန် နှိပ်ပါ
            </a>
          </div>
          <div className="text-white bg-gradient-to-r from-amber-500 via-violet-600 to-pink-500 md:text-3xl sm:text-2xl px-4 py-4 rounded-3xl">
            <a href=" https://m.me/318606574661924" target="_blank">
              {" "}
              Facebook သို့ ဆက်သွယ်ရန် နှိပ်ပါ
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeScreen;
