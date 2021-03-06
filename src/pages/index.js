import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import News from "../components/news/news"
import Banner from "../components/banner/banner"
import Viewed from "../components/viewed/viewed"
import Helmet from "react-helmet"
import Swiper from "react-id-swiper"
import Sales from "../components/sales/sales"
import SalesSlider from "../components/sales/sales_slider"
import SalesEco from "../components/sales/sales_eco"
import SalesBest from "../components/sales/sales_best"
import Owl from "../components/owl/owl"
import BannersMob from "../components/banner/banners_mob"
import BestPrintersSlider from "../components/bestPrinters/BestPrintersSlider"
import "../styles/scss/main.scss"

const IndexPage = ({ data: { allContentfulSwiper } }) => {
  let params, paramsHorizontal

  params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <img
        alt="icon"
        className="swiper-button-next swiper-next"
        src={"/icons/swiper_right.svg"}
      />
    ),
    renderNextButton: () => (
      <img
        alt="icon"
        className="swiper-button-prev swiper-prev"
        src={"/icons/swiper_left.svg"}
      />
    ),
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }

  paramsHorizontal = {
    ...params,
    direction: "vertical",
  }

  return (
    <Layout>
      <SEO title="Home" />

      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js" />
      </Helmet>

      <div className="desktop-hide">
        <Swiper {...paramsHorizontal}>
          {allContentfulSwiper.edges.map(({ node }) => (
            <div
              key={node}
              style={{ backgroundImage: `url(${node.image.file.url})` }}
            ></div>
          ))}
        </Swiper>
      </div>

      <div className="mobile-hide">
        <Swiper {...params}>
          {allContentfulSwiper.edges.map(({ node }) => (
            <Link
              to="/landing"
              key={node}
              style={{ backgroundImage: `url(${node.image.file.url})` }}
            ></Link>
          ))}
        </Swiper>
      </div>

      <BannersMob />

      <div className="desktop-hide">
        <SalesSlider />
        <BestPrintersSlider />
      </div>

      <div className="columns desktop-layout">
        <div className="left_column">
          <div className="mobile-hide">
            <Banner />
          </div>

          <News />

          <div className="desktop-hide">
            <SalesEco />
          </div>

          <Viewed />
        </div>

        <div className="main_column">
          <Sales />

          <div className="mobile-hide">
            <SalesSlider />
          </div>

          <SalesBest />

          <div className="mobile-hide">
            <SalesEco />
          </div>

        </div>
      </div>

      <div className="desktop-hide">
        <Banner />
      </div>

        <Owl />


    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulSwiper {
      edges {
        node {
          image {
            file {
              url
            }
          }
          title
        }
      }
    }
  }
`

export default IndexPage