interface Document {
  webkitHidden?: boolean;
  msHidden?: boolean;
}
interface NavigatorUAData {
  brands: Array<{ brand: string; version: string }>;
  mobile: boolean;
  platform: string;
}

interface Navigator {
  userAgentData?: NavigatorUAData;
}
