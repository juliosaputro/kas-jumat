import RestoreSharpIcon from "@mui/icons-material/RestoreSharp";
import InfoIcon from "@mui/icons-material/Info";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BeenhereSharpIcon from "@mui/icons-material/BeenhereSharp";

export const UserMenu = [
  {
    name: "Transaksi",
    route: "/User/Home",
    icon: <RestoreSharpIcon sx={{ color: "teal", width: 40, height: 40 }} />,
    disabled:false
  },
  {
    name: "Asset",
    route: "/",
    icon: <BeenhereSharpIcon sx={{ color: "teal", width: 40, height: 40 }} />,
    disabled:true
  },
  {
    name: "Warga",
    route: "/",
    icon: <AccountBoxIcon sx={{ color: "teal", width: 40, height: 40 }} />,
    disabled:true
  },
  {
    name: "Informasi",
    route: "/",
    icon: <InfoIcon sx={{ color: "teal", width: 40, height: 40 }} />,
    disabled:true
  },
];

export const AdminMenu = [
  {
    name: "Transaksi",
    route: "/Admin/Home",
    icon: <RestoreSharpIcon sx={{ color: "teal", width: 40, height: 40 }} />,
    disabled:false
  },
  {
    name: "Asset",
    route: "/Admin/Asset",
    icon: <BeenhereSharpIcon sx={{ color: "teal", width: 40, height: 40 }} />,
    disabled:false
  },
  {
    name: "Warga",
    route: "/Admin/Warga",
    icon: <AccountBoxIcon sx={{ color: "teal", width: 40, height: 40 }} />,
    disabled:false
  },
  {
    name: "Informasi",
    route: "/Admin/Info",
    icon: <InfoIcon sx={{ color: "teal", width: 40, height: 40 }} />,
    disabled:false
  },
];
