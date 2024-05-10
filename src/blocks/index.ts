// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import About_2 from './About_2'
import { About_2_Block } from './About_2/block'
import About_3 from './About_3'
import { About_3_Block } from './About_3/block'
import Banner13_1 from './Banner13_1'
import { Banner13_1_Block } from './Banner13_1/block'
import Blog1_6 from './Blog1_6'
import { Blog1_6_Block } from './Blog1_6/block'
import BoxContent from './BoxContent'
import { BoxContent_Block } from './BoxContent/block'
import Brands1_1 from './Brands1_1'
import { Brands1_1_Block } from './Brands1_1/block'
import Brands1_12 from './Brands1_12'
import { Brands1_12_Block } from './Brands1_12/block'
import Ct02_2 from './Ct02_2'
import { Ct02_2_Block } from './Ct02_2/block'
import Faqs3_1 from './Faqs3_1'
import { Faqs3_1_Block } from './Faqs3_1/block'
import Features2_1 from './Features2_1'
import { Features2_1_Block } from './Features2_1/block'
import Features5_1 from './Features5_1'
import { Features5_1_Block } from './Features5_1/block'
import Features6_1 from './Features6_1'
import { Features6_1_Block } from './Features6_1/block'
import Features11_14 from './Features11_14'
import { Features11_14_Block } from './Features11_14/block'
import Hero15 from './Hero_15'
import { Hero15_Block } from './Hero_15/block'
import Integrations2_1 from './Integrations2_1'
import { Integrations2_1_Block } from './Integrations2_1/block'
import Lnk1_23 from './Lnk1_23'
import { Lnk1_23_Block } from './Lnk1_23/block'
import Lnk2_1 from './Lnk2_1'
import { Lnk2_1_Block } from './Lnk2_1/block'
import Lnk3_1 from './Lnk3_1'
import { Lnk3_1_Block } from './Lnk3_1/block'
import Newsletter1_6 from './Newsletter1_6'
import { Newsletter1_6_Block } from './Newsletter1_6/block'
import Page1 from './Page1'
import { Page1_Block } from './Page1/block'
import Rating1_1 from './Rating1_1'
import { Rating1_1_Block } from './Rating1_1/block'
import Rating1_6 from './Rating1_6'
import { Rating1_6_Block } from './Rating1_6/block'
import Reviews1_1 from './Reviews1_1'
import { Reviews1_1_Block } from './Reviews1_1/block'
import Reviews2_7 from './Reviews2_7'
import { Reviews2_7_Block } from './Reviews2_7/block'
import Statistic1_1 from './Statistic1_1'
import { Statistic1_1_Block } from './Statistic1_1/block'
import Statistic5_4 from './Statistic5_4'
import { Statistic5_4_Block } from './Statistic5_4/block'
import Team_1 from './Team_1'
import { Team_1_Block } from './Team_1/block'
import TemplateDesigns from './TemplateDesigns'
import { TemplateDesigns_Block } from './TemplateDesigns/block'
import Test1_1 from './Test1_1'
import { Test1_1_Block } from './Test1_1/block'
import TextContent_1 from './TextContent_1'
import { TextContent_1_Block } from './TextContent_1/block'
import TextContent_2 from './TextContent_2'
import { TextContent_2_block } from './TextContent_2/block'

export const blocksJSX = {
  Test1_1: Test1_1,
  Page1: Page1,
  hero15: Hero15,
  features6_1: Features6_1,
  features5_1: Features5_1,
  statistic1_1: Statistic1_1,
  lnk2_1: Lnk2_1,
  lnk3_1: Lnk3_1,
  brands1_1: Brands1_1,
  features2_1: Features2_1,
  ct02_2: Ct02_2,
  templateDesigns: TemplateDesigns,
  reviews1_1: Reviews1_1,
  rating1_1: Rating1_1,
  integrations2_1: Integrations2_1,
  faqs3_1: Faqs3_1,
  banner13_1: Banner13_1,
  about_2: About_2,
  about_3: About_3,
  statistic5_4: Statistic5_4,
  textContent_1: TextContent_1,
  features11_14: Features11_14,
  brands1_12: Brands1_12,
  team_1: Team_1,
  boxContent: BoxContent,
  lnk1_23: Lnk1_23,
  textContent_2: TextContent_2,
  reviews2_7: Reviews2_7,
  rating1_6: Rating1_6,
  blog1_6: Blog1_6,
  newsletter1_6: Newsletter1_6,
}

export type SlugType = keyof typeof blocksJSX

export const blocks = {
  Test1_1: Test1_1_Block,
  Page1_Block: Page1_Block,
  Hero15: Hero15_Block,
  Features6_1: Features6_1_Block,
  Features5_1: Features5_1_Block,
  Statistic1_1: Statistic1_1_Block,
  Lnk2_1: Lnk2_1_Block,
  Lnk3_1: Lnk3_1_Block,
  Brands1_1: Brands1_1_Block,
  Features2_1: Features2_1_Block,
  Ct02_2: Ct02_2_Block,
  TemplateDesigns: TemplateDesigns_Block,
  Reviews1_1: Reviews1_1_Block,
  Rating1_1: Rating1_1_Block,
  Integrations2_1: Integrations2_1_Block,
  Faqs3_1: Faqs3_1_Block,
  Banner13_1: Banner13_1_Block,
  About_2: About_2_Block,
  About_3: About_3_Block,
  Statistic5_4: Statistic5_4_Block,
  TextContent_1: TextContent_1_Block,
  Features11_14: Features11_14_Block,
  Brands1_12: Brands1_12_Block,
  Team_1: Team_1_Block,
  BoxContent_Block: BoxContent_Block,
  Lnk1_23_Block: Lnk1_23_Block,
  TextContent_2_block: TextContent_2_block,
  Reviews2_7: Reviews2_7_Block,
  Rating1_6: Rating1_6_Block,
  Blog1_6: Blog1_6_Block,
  Newsletter1_6: Newsletter1_6_Block,
}
