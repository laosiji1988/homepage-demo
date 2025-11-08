import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-900">
      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* 顶部头像与简介 */}
        <section className="flex flex-col-reverse items-center gap-6 sm:flex-row sm:items-center sm:gap-10">
          <div className="flex-1">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              钟政
            </h1>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              深AI夜校联合创始人、AI课程讲师，专注于AI技术在各行业的应用与培训，致力于推动AI技术的普及与数字化转型。
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
              >
                联系我
              </a>
              <a
                href="#skills"
                className="inline-flex items-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                我的技能
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/avatar.jpg"
              alt="钟政头像"
              width={140}
              height={140}
              className="h-28 w-28 rounded-full border border-zinc-200 object-cover shadow-sm sm:h-36 sm:w-36 dark:border-zinc-800"
              priority
            />
          </div>
        </section>

        {/* 我是谁 */}
        <section id="about" className="mt-12">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">我是谁</h2>
          <p className="mt-3 leading-7 text-zinc-700 dark:text-zinc-300">
            钟政，深AI夜校联合创始人、AI课程讲师，专注于AI技术在各行业的应用与培训，致力于推动AI技术的普及与数字化转型。
          </p>
        </section>

        {/* 我的技能 */}
        <section id="skills" className="mt-12">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">我的技能</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              "AI公文写作",
              "AI职场办公提效",
              "AI自媒体运营",
              "AI图片设计",
              "AI视频制作",
              "腾讯元宝",
              "Deepseek",
              "提示词优化",
              "数字人应用",
              "政企培训定制",
            ].map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 ring-1 ring-inset ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:ring-zinc-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* 我的履历 */}
        <section id="experience" className="mt-12">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">我的履历</h2>
          <ul className="mt-4 space-y-3">
            {[
              "深AI夜校联合创始人/讲师 - AI课程设计与培训",
              "华为AIGC高级生态工程师 - AI技术生态建设",
              "破局俱乐部初创合伙人 - 企业AI转型咨询",
              "特约AI讲师 - 广东省博物馆、广东美术馆、深圳多个政府部门",
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl border border-zinc-200 bg-white p-4 text-zinc-800 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 我的成就 */}
        <section id="achievements" className="mt-12">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">我的成就</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">政企培训</h3>
              <p className="mt-2 text-zinc-800 dark:text-zinc-200">
                为深圳南山区政法委等单位培训，办公效率提升35%，法律文书耗时减少25%
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">社区赋能</h3>
              <p className="mt-2 text-zinc-800 dark:text-zinc-200">
                小红书AI副业训练营学员出单率95%，助力社区宝妈经济独立
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">课程影响力</h3>
              <p className="mt-2 text-zinc-800 dark:text-zinc-200">
                多场AI培训获政企领导高度认可，计划大规模推广
              </p>
            </div>
          </div>
        </section>

        {/* 联系方式 */}
        <section id="contact" className="mt-12">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">联系方式</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-5 text-zinc-800 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
              <p>电话：<a href="tel:13544232885" className="hover:underline">13544232885</a></p>
              <p className="mt-2">邮箱：<a href="mailto:295648183@qq.com" className="hover:underline">295648183@qq.com</a></p>
              <p className="mt-2">地址：深圳</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-zinc-700 dark:text-zinc-300">
                有政企培训或课程合作需求，欢迎随时联系。
              </p>
              <a
                href="mailto:295648183@qq.com"
                className="mt-3 inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
              >
                发送邮件
              </a>
            </div>
          </div>
        </section>

        {/* 页脚 */}
        <footer className="mt-16 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          © {new Date().getFullYear()} 钟政 · 个人主页
        </footer>
      </main>
    </div>
  );
}
