import React from "react"

import SEO from "~/components/SEO"
import Layout from "~/layouts/Layout"

export default function pages() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="container">
        <p className="text-4xl text-center">Pagina não encontrada</p>
      </div>
    </Layout>
  )
}
