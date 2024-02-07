import Image from 'next/image';
import InstudiApp from '../../public/static/instudiAppPage.png';
import CrInstudiText from '@/components/CrInstudiText';
import CrLinkButton from '@/client/CrLinkButton';
import HoverCards from '@/client/HoverCards';
const stats = [
  { id: 1, name: 'Çevrim içi öğrenimin geleneksel yöntemden daha iyi olduğunu söylüyor ', value: 'Öğrencilerin %70\'i', caption: "Potomac Üniversitesi" },
  { id: 2, name: 'Ayda 1\'den daha az rehberlik servislerinden yararlanmakta', value: '%55\'ten fazlası', caption: "Uluslararası İnsan Bilimleri Dergisi. 10.14687/ijhs.v11i2.2849" },
  { id: 3, name: 'Türkiye\'de hane halkı tarafından yapılan toplam yıllık eğitim harcaması', value: '148 Milyar TRY', caption: "https://data.tuik.gov.tr/Bulten/Index?p=Egitim-Harcamalari-Istatistikleri-2022-49574" },
]
export default function Home() {
  return (
    <main>
      <div className='h-screen w-screen px-10 flex flex-wrap lg:flex-nowrap flex-row'>
        <div className='w-full  pt-[10vh]'>
          <CrInstudiText useImg={false} />
          <div
            className='whitespace-pre-line mt-10 text-lg md:text-2xl 2xl:text-3xl inline-block antialiased peer tracking-tight group
        leading-loose mb-10'>
            <div
              className='text-[var(--secondary-rgb)] opacity-80 font-medium
          group-hover:opacity-50 group-hover:blur-sm'>
              Öğrencilerin eğitim materyalleri bulabileceği ve paylaşabileceği bir
              platform.
            </div>
            <div
              className='text-[var(--primary-rgb)] opacity-80 font-medium
          group-hover:opacity-50 group-hover:blur-sm'>
              Eğitimcilerin bilgilerini paylaşabileceği bir platform.
            </div>
            <div
              className='text-[var(--secondary-rgb)] opacity-80 font-medium
          group-hover:opacity-50 group-hover:blur-sm'>
              Kuruluşların kendilerini gösterebilecekleri ve kurs açabilecekleri
              bir platform.
            </div>
            <div
              className='text-[var(--primary-rgb)] peer opacity-80 font-medium
          group-hover:opacity-100 group-hover:scale-110 group-hover:font-semibold transition-all'>
              Öğrenmek isteyen herkes için bir <span className=''>platform.</span>
            </div>
          </div>
          <CrLinkButton
            svgDs={[
              'M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z',
              'M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z',
            ]}
            content='Giriş Yap!'
            url='/login'
          />
        </div>
        <div className='w-full flex-initial 2xl:basis-7/12'>
          <Image
            alt='Instudi'
            src={InstudiApp}
            className='hidden lg:inline min-w-[30em]'
            width={1720}
            height={1850}></Image>
        </div>



        <div className='-translate-x-1/2 skew-y-6 aspect-square w-24 absolute rounded-2xl origin-top-left rotate-45 bg-[var(--primary-rgb)]'></div>
        <div
          className='bottom-2 right-2 aspect-square w-10 2xl:bottom-[8%] sm:w-16 md:w-24 lg:w-20 lg:bottom-10 md:bottom-16
      md:left-auto lg:left-1/2 md:right-[8%] 2xl:left-[55%] 2xl:w-28 absolute rounded-ee-none rounded-full origin-top-left
      bg-[var(--primary-rgb)] '></div>
        <div
          className='top-32 lg:top-[12%] sm:right-[28%] sm:top-[5%] sm:w-16 aspect-square w-10 md:w-[5rem] lg:w-20 -right-2 md:right-[15%]
       lg:right-1/3 2xl:w-24 absolute origin-top-left  bg-[var(--secondary-rgb)]'></div>
        <div
          className='top-40 aspect-square sm:right-[36%] sm:top-[10%] sm:w-12 w-8 md:w-[4rem] lg:w-16 right-5 md:right-[20%] md:top-44 
      lg:right-[38.3%] 2xl:w-20 lg:top-[18%] absolute origin-top-left  bg-[var(--secondary-rgb)]'></div>
      </div>

      <section className="relative isolate overflow-hidden bg-transparent  px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_center,theme(colors.indigo.500),white)]
        dark:bg-[radial-gradient(45rem_50rem_at_center,theme(colors.indigo.500),black)] opacity-10" />
        <div className="absolute inset-y-0 opacity-60 right-[60%] xl:right-[75%] -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-25deg] 
         shadow-lg shadow-[var(--primary-rgb)] ring-1 sm:mr-28 lg:mr-0 dark:opacity-70
        xl:mr-16 xl:origin-center" />
        <div className="absolute opacity-60 inset-y-0 right-[50%] xl:right-[65%] -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[25deg] 
         shadow-lg shadow-[var(--primary-rgb)] ring-1 sm:mr-28 lg:mr-0 dark:opacity-100
        xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl antialiased">
          <figure className="mt-10">
            <figcaption className="mb-10">
              <div className="mt-4 flex items-center justify-center space-x-3 text-2xl">
                <div className="font-semibold text-4xl text-gray-800/95 dark:text-[var(--primary-rgb)]">Instudi de Ne ola?</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-800">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600 text-lg">Kısaca</div>
              </div>
            </figcaption>
            <blockquote className="text-center text-base leading-8 text-gray-800/95 sm:text-2xl sm:leading-9 dark:text-slate-300/80">

              Instudi, öğrencilerin akış kısmında birbirlerinden faydalanabileceği, mentörlük sayfasında üniversitelilerden ve
              öğretmenlerden birebir görüşme veya sınıf dersi alabileceği, eğitim kurumlarını inceleyip webinarlara katılabilecekleri
              ayrıca tüm dersler hakkında podcastler dinleyebilecekleri modüler bir platformdur. Eğitimde değişen çağa ayak uyduran ve herkes için
              yeni bir modül.
            </blockquote>

          </figure>
        </div>
      </section>

      <div className="pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600/95 dark:text-slate-500">{stat.name}
                </dt>
                <dd className="order-first relative text-3xl font-semibold tracking-tight text-gray-800/95 sm:text-5xl
                dark:bg-gradient-to-br dark:from-blue-800 dark:to-blue-500 dark:bg-clip-text dark:text-transparent">
                  {stat.value}
                  <span className='group'>
                    *
                    <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-xs
                    group-hover:scale-105 font-light tracking-normal shadow-slate-400 left-1/2 -translate-x-1/2 group-hover:-top-[50%] top-1/2 w-fit 
                   text-[var(--background-start-rgb)] dark:text-slate-400 transition-all duration-300 bg-[var(--foreground-text-rgb)] rounded-lg shadow-lg opacity-30 dark:bg-gray-700 
                   group-hover:visible group-hover:opacity-100 ease-in-out  dark:shadow-blue-700/70 blur-xl group-hover:blur-0">
                      {stat.caption}
                    </div>
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="inline-flex p-20 sm:p-24 items-center justify-center w-full">
        <hr className="w-[75%] h-[3px] my-8 bg-slate-700/30 border-0 dark:bg-gray-700" />
        <span className="absolute px-3 font-medium text-2xl text-slate-900/90 -translate-x-1/2 dark:bg-white/80 bg-[var(--secondary-rgb)] left-1/2 dark:text-white dark:bg-gray-900">?!?!!</span>
      </div>

      <div className="order-first p-3 text-center mb-1 relative text-6xl subpixel-antialiased font-semibold tracking-tight  sm:text-5xl
                bg-gradient-to-r dark:from-emerald-400 dark:to-yellow-200 bg-clip-text text-transparent
                from-teal-300 to-sky-600">
        yeter da, bize gerçek bir çözüm gerek.
      </div>

      <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-[8vh] mb-[20vh]'>
        <HoverCards />
      </div>

      <div className="order-first w-full !my-[20vh] flex flex-col gap-10 justify-center items-center text-center relative text-6xl subpixel-antialiased font-semibold tracking-tight sm:text-5xl
                bg-gradient-to-r dark:from-emerald-400 dark:to-yellow-200 bg-clip-text text-transparent
                from-teal-300 to-sky-600 ">
        <div className='mb-4'>
          kolay, erişilebilir, modern.
        </div>
        <CrInstudiText isBlock={false} useImg={true} useText={false} />
        <CrLinkButton
          svgDs={[
            'M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z',
            'M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z',
          ]}
          content='niye duruyorsun ki?'
          url='/register'
        />
      </div>


    </main>
  );
}
