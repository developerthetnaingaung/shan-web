function Home() {
  return (
    <>
      <div className="grid place-content-center h-screen">
        <div className="flex mx-auto flex-col cursor-pointer bg-white justify-center py-3 px-3 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[200px] w-full card-item-div max-w-screen-md min-h-[100px]">
          <p className="font-bold text-3xl">
            အမ်နိုင်းစလော့ ကစားရန် အောက်ပါ ခလုတ်ကို နှိပ်ပါ
          </p>
        </div>
        <div className="mt-20 text-center">
          <a
            href={"/welcome"}
            className="bg-black px-10 py-3 text-white mt-5 duration-300 rounded-3xl hover:bg-gradient-to-tr from-red-400 to-slate-200"
          >
            Button | ခလုတ်
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
