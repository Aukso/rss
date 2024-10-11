import { Buksirnye } from "@/components/screens/buksirnye/buksirnye.component";
import { BuksirnyeStanki } from "@/components/screens/buksirnye_stanki/buksirnye_stanki.component";
import { Galtovochnoe_Oborudovanie } from "@/components/screens/galtovochnoe_oborudovanie/galtovochnoe_oborudovanie.component";
import { Home } from "@/components/screens/home/home.component";
import { PotokovieStanki } from "@/components/screens/potokovie_stanki/potokovie_stanki.component";
import { Potokovye } from "@/components/screens/potokovye/potokovye.component";

export const ROUTES = [
  {
    path:'/',
    component: Home
  },
  {
    path:'/potokovye',
    component: Potokovye
  },
  {
    path:'/buksirnye',
    component: Buksirnye
  },
  {
    path: '/galtovochnoe_oborudovanie',
    component: Galtovochnoe_Oborudovanie
  },
  {
    path:'/potokovie_stanki',
    component: PotokovieStanki
  },
  {
    path:'/buksirnye_stanki',
    component: BuksirnyeStanki
  }
]