import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Pekka Astala - Minecraft Mod Author" />
    <h1>About the Author - Pekka Astala</h1>
    <p>This mod has been authored by Pekka Astala, a Finnish software developer.</p>
    <p>I have well over a decade of experience in various software development areas but this is my first attempt at creating a Minecraft mod.</p>
    <p>Even though the mod is sort of a "proof of concept" and a learning experience for me, I fully want it to be a working product people can actually use and like.</p>
    <p>If you have any issues with the mod, please contact me at pekka.astala@gmail.com</p>
    <Link to="/">Back to Trash Bin Mod main page</Link>
  </Layout>
)

export default SecondPage
