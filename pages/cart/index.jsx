import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  getKeyValue,
  Input,
  Button,
} from "@nextui-org/react";
import { EditIcon } from "../../components/ui/icons/EditIcon";
import { DeleteIcon } from "../../components/ui/icons/DeleteIcon";
import { EyeIcon } from "../../components/ui/icons/EyeIcon";
import PlusIcon from "../../components/ui/icons/PlusIcon";
import MinusIcon from "../../components/ui/icons/MinusIcon";

const columns = [
  { name: "NAME", uid: "name" },
  { name: "QUANTITY", uid: "quantity" },
  { name: "UNIT PRICE", uid: "unitprice" },
  { name: "ACTIONS", uid: "actions" },
];

const items = [
  {
    id: 1,
    name: "Tony Reichert",
    quantity: 2,
    image: "/images/f6.png",
    price: 100,
    extras: ["Mayones", "Ketçap", "Barbekü Sos"],
  },
  {
    id: 2,
    name: "Zoey Lang",
    quantity: 2,
    image: "/images/f6.png",
    price: 100,
    extras: ["Mayones", "Ketçap", "Barbekü Sos"],
  },
  {
    id: 3,
    name: "Jane Fisher",
    quantity: 2,
    image: "/images/f6.png",
    price: 100,
    extras: ["Mayones", "Ketçap", "Barbekü Sos"],
  },
];

export default function Cart() {
  const renderCell = React.useCallback((item, columnKey) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{
              radius: "lg",
              src: item.image,
              size: "lg",
              className: "bg-transparent hidden md:block",
            }}
            className="w-[10rem] md:w-[15rem]"
            description={item.extras.join(" , ")}
            name={cellValue}
          ></User>
        );
      case "quantity":
        return (
          <div className="flex flex-col">
            <Input
              size="sm"
              type="text"
              variant="bordered"
              startContent={
                <Button className="min-w-unit-0" size="sm">
                  <PlusIcon className="text-2xl flex-shrink-0" />
                </Button>
              }
              endContent={
                <Button className="min-w-unit-0" size="sm">
                  <MinusIcon className="text-2xl flex-shrink-0" />
                </Button>
              }
              classNames={{
                input: ["text-align-center"],
                inputWrapper: ["w-[10rem]"],
              }}
              value={item.quantity}
              color="default"
              className="  p-0 text-align-center"
            />
          </div>
        );
      case "unitprice":
        return <p className="capitalize text-center">${item.price}</p>;
      case "actions":
        return (
          <div className="relative flex items-center justify-center gap-2">
            <Tooltip color="danger" content="Delete Product">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="dark min-h-[85vh]  text-foreground bg-background p-[2rem]  md:p-[5rem] ">
      <p className="font-dancing text-5xl text-center mb-10">Cart</p>
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              className={column.uid !== "name" && `text-center`}
              key={column.uid}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
