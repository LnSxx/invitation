import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage: React.FC<PageProps> = () => {
  const open2GIS = () => {
    const url = `https://go.2gis.com/wn9s1q`;
    window.open(url);
  };

  const openGoogleMaps = () => {
    const latitude = "42.8165261";
    const longitude = "74.6383285";
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(url);
  };

  const openYandexGo = () => {
    const latitude = 42.816544;
    const longitude = 74.637783;
    const url = `https://3.redirect.appmetrica.yandex.com/route?end-lat=${latitude}&end-lon=${longitude}&level=50&ref=yoursiteru&appmetrica_tracking_id=1178268795219780156`;
    window.open(url);
  };

  return (
    <main className='min-h-screen text-slate-50'>
      <div className="flex justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-3xl md:text-5xl">Дорогой друг,</p>
          <p className="text-3xl md:text-5xl pb-5">приглашаем на новоселье!</p>
          <StaticImage src='../images/cats.png' alt="cats" />
          <p className="text-2xl md:text-3xl pb-5 pt-5 font-light">Рад сообщить,
            что я недавно переехал на новую квартиру.
            В ней даже имеются холодильник и микроволновка!
            Хочу с тобой поделиться этой радостью и зову тебя на небольшой праздник.</p>
          <div className="bg-cyan-900 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Дата</h2>
            <p className="text-slate-50">3 июня 2023, 14:00</p>
          </div>
          <div className="bg-cyan-900 rounded-lg p-6 shadow-md mt-5">
            <h2 className="text-2xl font-semibold mb-4">Адрес</h2>
            <p className="text-slate-50">Кыргызская Республика,
              Чуйская область, город Бишкек,
              12 микрорайон, дом 12, 9 этаж,
              квартира 25, домофон 25</p>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 mt-5 mb-10">
            <div className="cursor-pointer w-full md:w-1/3 bg-sky-500 hover:bg-sky-400 rounded-lg" onClick={ openGoogleMaps }>
              <div className="h-max p-6" >
                <div className='flex flex-row justify-between items-center'>
                  <div>Открыть в Google Maps</div>
                  <StaticImage height={ 30 } src='../images/gm.png' alt="cats" />
                </div>
              </div>
            </div>
            <div className="cursor-pointer w-full md:w-1/3 bg-green-500 hover:bg-green-400 rounded-lg" onClick={ open2GIS }>
              <div className="h-max p-6" >
                <div className='flex flex-row justify-between items-center'>
                  <div>Открыть в 2ГИС</div>
                  <StaticImage height={ 30 } src='../images/2gis.png' alt="cats" />
                </div>
              </div>
            </div>
            <div className="cursor-pointer w-full md:w-1/3 bg-yellow-500 hover:bg-yellow-400 rounded-lg" onClick={ openYandexGo }>
              <div className="h-max p-6" >
                <div className='flex flex-row justify-between items-center'>
                  <div>Заказать такси</div>
                  <StaticImage height={ 30 } src='../images/yg.png' alt="cats" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Приглашение</title>
