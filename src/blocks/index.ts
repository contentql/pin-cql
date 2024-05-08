// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import Banner13_1 from './Banner13_1'
import { Banner13_1_Block } from './Banner13_1/block'
import Brands1_1 from './Brands1_1'
import { Brands1_1_Block } from './Brands1_1/block'
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
import Hero15 from './Hero_15'
import { Hero15_Block } from './Hero_15/block'
import Integrations2_1 from './Integrations2_1'
import { Integrations2_1_Block } from './Integrations2_1/block'
import Lnk2_1 from './Lnk2_1'
import { Lnk2_1_Block } from './Lnk2_1/block'
import Lnk3_1 from './Lnk3_1'
import { Lnk3_1_Block } from './Lnk3_1/block'
import Page1 from './Page1'
import { Page1_Block } from './Page1/block'
import Rating1_1 from './Rating1_1'
import { Rating1_1_Block } from './Rating1_1/block'
import Reviews1_1 from './Reviews1_1'
import { Reviews1_1_Block } from './Reviews1_1/block'
import Statistic1_1 from './Statistic1_1'
import { Statistic1_1_Block } from './Statistic1_1/block'
import TemplateDesigns from './TemplateDesigns'
import { TemplateDesigns_Block } from './TemplateDesigns/block'
import Test1_1 from './Test1_1'
import { Test1_1_Block } from './Test1_1/block'

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
}
