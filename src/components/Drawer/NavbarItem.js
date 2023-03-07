import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
export const NavbarItem = [
  {
    title: "Notes",
    icon: LightbulbOutlinedIcon,
    route: "/note",
  },

  {
    title: "Archive",
    icon: ArchiveOutlinedIcon,
    route: "/archive",
  },
  {
    title: "Trash",
    icon: DeleteOutlineOutlinedIcon,
    route: "/delete",
  },
];
