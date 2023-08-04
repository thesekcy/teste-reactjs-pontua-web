import { CancelIcon } from './cancel'
import { CheckIcon } from './check'
import { ConfigIcon } from './config'
import { DashboardIcon } from './dashboard'
import { DownArrowIcon } from './downArrow'
import { EmailIcon } from './email'
import { EnterRightIcon } from './enterRight'
import { EyeNotViewIcon } from './eyeNotView'
import { EyeViewIcon } from './eyeView'
import { LeftArrowIcon } from './leftArrow'
import { ListIcon } from './list'
import { LogOutIcon } from './logout'
import { MenuIcon } from './menu'
import { PlaceholderIcon } from './placeholder'
import { ProfileIcon } from './profile'
import { RightArrowIcon } from './rightArrow'
import { SearchIcon } from './search'
import { ShieldQuestionIcon } from './shieldQuestion'
import { TeamsIcon } from './teams'
import { UsersIcon } from './users'

type IconMapType = {
  [key: string]: () => JSX.Element;
};

const iconMap: IconMapType = {
  CheckIcon,
  DashboardIcon,
  DownArrowIcon,
  EmailIcon,
  EnterRightIcon,
  EyeNotViewIcon,
  EyeViewIcon,
  LeftArrowIcon,
  LogOutIcon,
  ProfileIcon,
  RightArrowIcon,
  SearchIcon,
  ShieldQuestionIcon,
  ListIcon,
  TeamsIcon,
  PlaceholderIcon,
  ConfigIcon,
  UsersIcon,
  CancelIcon,
  MenuIcon
}

export default iconMap