import React from "react"

import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"

import SEO from "~/components/SEO"
import Layout from "~/layouts/Layout"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <SEO title="Tags index" />
    <section className="flex-auto">
      <div className="container page-header hidden md:block">
        <div className="page-header-img"></div>
        <h1>Tags</h1>
      </div>

      <div className="container py-10">
        <ul className="flex flex-wrap">
          {group.map(tag => (
            <li
              className="py-4 px-8 mr-4 mb-4 bg-brand-3-1 text-brand-4-6"
              key={tag.fieldValue}
            >
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
