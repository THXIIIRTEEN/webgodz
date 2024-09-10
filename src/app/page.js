"use client"

import Header from "./components/header/Header";
import Service from "./components/Service";
import Stage from "./components/Stage";
import SwiperBlock from "./components/SwiperBlock";
import serviceList from "./components/service-list.json";
import stagesList from "./components/stages-list.json"
import PortfolioSlider from "./components/PortfolioSlider";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {

  const variants = {
    offscreen: {
      opacity: 0, 
      x: '-10%'
    },
    onscreen: {
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const reverseVariants = {
    offscreen: {
      opacity: 0, 
      x: '10%'
    },
    onscreen: {
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
      <Header></Header>
      <div className="first-section">
        <div className="first-section_top-text">
          <motion.h4
            variants={variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}>
            five and +
          </motion.h4>
          <motion.p
            variants={reverseVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
          >
            Наша задача делать как <br/> надо, а как не надо не делать
          </motion.p>
        </div>
        <motion.h1
          variants={variants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
        >
          Создаём сайты на <br/> пять с плюсом
        </motion.h1>
        <motion.p
            variants={reverseVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
            className="show-mobile first-section_text"
          >
            Наша задача делать как <br/> надо, а как не надо не делать
          </motion.p>
        <button className="project-talk_button"><Link href={"#contacts"}>Обсудить проект</Link></button>
      </div>
      <SwiperBlock/>
      <div className="section" id="about_us">
        <div className="section_top-text">
          <motion.h2 className="category-name_sign"
            variants={variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
          >
            О нас
          </motion.h2>
          <motion.p
            variants={reverseVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
            className="category-name_moto"
          >
            Давайте поближе <br/> <span>познакомимся</span>
          </motion.p>
        </div>
        <motion.div className="about-us_section"
          variants={container}
          initial="hidden"
          animate="visible"
          >
          <motion.div className="first-block about-us_block"
            variants={item}
          >
            <button>1</button>
            <p>Мы — команда программистов из Екатеринбурга, активно занимающихся разработкой сайтов и приложений. Наша команда сочетает в себе креативность и технические навыки, чтобы создавать уникальные и функциональные продукты.</p>
          </motion.div>
          <motion.div className="second-block about-us_block"
            variants={item}
          >
            <button>2</button>
            <p>Кроме красивого дизайна, мы любим вносить в наш продукт интересный функционал. Мы стремимся к тому, чтобы каждый проект был не только визуально привлекательным, но и удобным в использовании. </p>
          </motion.div>
          <motion.div className="third-block about-us_block"
            variants={item}
          >
            <button>3</button>
            <p>Мы постоянно совершенствуем свои навыки и следим за последними тенденциями в области веб-разработки. Это позволяет нам предлагать современные и инновационные решения.</p>
          </motion.div>
          <motion.div className="fourth-block about-us_block"
            variants={item}
          >
            <button>4</button>
            <p>Наш подход основан на индивидуальном подходе к каждому проекту. Мы гордимся тем, что можем предложить полный цикл разработки — от концепции и дизайна до тестирования и запуска.</p>
          </motion.div>

        </motion.div>
      </div>
      <SwiperBlock/>
      <div className="section" id="service">
        <div className="section_top-text">
        <motion.h2 className="category-name_sign"
            variants={variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
          >
            Услуги
          </motion.h2>
          <motion.p
            variants={reverseVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
            className="category-name_moto"
          >
            Дёшево plus сердито <br/> <span>equals webgodz</span>
          </motion.p>
        </div>
        <motion.div className="service-list"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {serviceList.map((service) => {
            return (
              <Service {...service} key={service.id}></Service>
            )
          })}
        </motion.div>
      </div>
      <SwiperBlock/>
      <div className="section" id="stages">
        <div className="section_top-text">
        <motion.h2 className="category-name_sign stages-sign"
            variants={variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
          >
            Этапы работы
          </motion.h2>
          <motion.p
            variants={reverseVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
            className="category-name_moto"
          >
            Надёжные как <br/> <span>швейцарские часы</span>
          </motion.p>
        </div>
        <div className="stages-list">
          {stagesList.map((stage) => {
            return (
              <Stage {...stage} key={stage.id}></Stage>
            )
          })}
        </div>
      </div>
      <SwiperBlock/>
      <div className="section" id="portfolio">
        <div className="section_top-text">
        <motion.h2 className="category-name_sign"
            variants={variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
          >
            Портфолио
          </motion.h2>
          <motion.p
            variants={reverseVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
            className="category-name_moto"
          >
            Наша сила <br/> <span>и мудрость</span>
          </motion.p>
        </div>
        <PortfolioSlider></PortfolioSlider>
      </div>
      <SwiperBlock/>
      <div className="section" id="contacts">
        <div className="section_top-text">
        <motion.h2 className="category-name_sign"
            variants={variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
          >
            Контакты
          </motion.h2>
          <motion.p
            variants={reverseVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
            className="category-name_moto"
          >
            Давайте начнём <br/> <span>наше сотрудничество</span>
          </motion.p>
        </div>
        <div className="contacts_list">
          <motion.div className="contacts_block"
            variants={variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
          >
            <div className="contacts_top-block">
              <p>07:00 - 21:00 по МСК</p>
              <h5>Мы в соцсетях:</h5>
            </div>
            <div className="contacs_buttons-block">
              <Link href={"https://vk.com/webgodz"}><img src="/images/vk-logo.svg"/></Link>
              <Link href={"https://t.me/Kosssstyaaa"}><img src="/images/tg-logo.svg"/></Link>
              <Link href={"#"}><img src="/images/ws-logo.svg"/></Link>
            </div>
          </motion.div>
          <motion.div className="contacts_block contacts__second"
            variants={reverseVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
          >
            <div className="contacts_top-block">
              <img src="/images/paper-clip.svg"/>
              <h5>Для нашего сотрудничества:</h5>
            </div>
            <div className="contacs_buttons-block">
              <button>Бриф</button>
              <button>Техническое задание</button>
            </div>
          </motion.div>
        </div>
      </div>
      <footer>
        <p>designed by webgodz</p>
        <p>©️2024</p>
      </footer>
    </>
  );
}
