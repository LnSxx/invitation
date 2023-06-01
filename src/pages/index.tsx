import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import GoogleMapsLink from "../link_components/google_maps_link"
import DoubleGisLink from "../link_components/double_gis_link"
import YandexTaxiButton from "../link_components/yandex_go_link"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className='min-h-screen text-slate-50'>
      <div className="flex justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-3xl md:text-5xl pb-5">Дорогой друг,</p>
          <p className="text-3xl md:text-5xl pb-5">Приглашаем на новоселье</p>
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
            <div className="w-full md:w-1/3 bg-sky-500 rounded-lg">
              <GoogleMapsLink />
            </div>
            <div className="w-full md:w-1/3 bg-green-500 rounded-lg">
              <DoubleGisLink />
            </div>
            <div className="w-full md:w-1/3 bg-yellow-500 rounded-lg">
              <YandexTaxiButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Приглашение</title>
