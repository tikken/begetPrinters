import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MyMap from "../components/map/map"
import ContactsContent from "../components/contacts/contacts_content"

const Cabinet = () => (
  <Layout>
    <SEO title="Cabinet" />

    <MyMap />
    <ContactsContent/>

  </Layout>
)

export default Cabinet
