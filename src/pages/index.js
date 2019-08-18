import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Trash Bin Minecraft Mod" />
    <h1>Trash Bin Minecraft Mod</h1>
    <p>Trash Bin is a minimalistic Minecraft Mod that adds trash bin to the game.</p>
    <p>In vanilla Minecraft there is no convenient way to get rid of items:</p>
    <dl>
      <dt>You can throw them to the ground</dt>
      <dd>Items take five minutes to despawn so you often pick them up again before that.</dd>
      <dt>You can throw them to lava</dt>
      <dd>Having a pool of lava nearby to be used as a trash bin is ugly and dangerous.</dd>
    </dl>
    <p>Trash Bin Mod adds a craftable trash bin block which looks good and immediately and safely deletes items put into it.</p>
    <h2>How it works</h2>
    <p>
      You can craft the trash bin with some iron and a bucket of lava
      <Img fluid={props.data.imageCrafting.childImageSharp.fluid} />
    </p>
    <p>
      The trash bucket is a custom block that can be placed down
      <Img fluid={props.data.imageHolding.childImageSharp.fluid} />
    </p>
    <p>
      Right clicking the trash block brings up GUI that allows destoying items instantly
      <Img fluid={props.data.imageGUI.childImageSharp.fluid} />
    </p>
    <Link to="/author/">About the Author</Link>
  </Layout>
)

export default IndexPage

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`

export const pageQuery = graphql`
  query {
    imageCrafting: file(relativePath: { eq: "crafting.png" }) {
      ...fluidImage
    }
    imageHolding: file(relativePath: { eq: "holding.png" }) {
      ...fluidImage
    }
    imageGUI: file(relativePath: { eq: "gui.png" }) {
      ...fluidImage
    }
  }
`