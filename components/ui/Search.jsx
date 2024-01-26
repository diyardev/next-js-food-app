import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Image,
} from "@nextui-org/react";

const columns = [
  { name: "image", uid: "image" },
  { name: "name", uid: "name" },
  { name: "price", uid: "price" },
];

const data = [
  {
    image: "/images/f3.png",
    name: "Reprehenderit aliqua",
    id: 1,
    price: "$50",
  },
  {
    image: "/images/f6.png",
    name: "Deserunt Lorem",
    id: 2,
    price: "$20",
  },
  {
    image: "/images/f3.png",
    name: "Lila Cabrera",
    id: 3,
    price: "$44",
  },
  {
    image: "/images/f6.png",
    name: "Keaton Phillips",
    id: 4,
    price: "$15",
  },
  {
    image: "/images/f3.png",
    name: "Alisa Shaw",
    id: 5,
    price: "$15",
  },
];

export default function App() {
  const [filterValue, setFilterValue] = React.useState("");

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = React.useMemo(() => {
    let filteredData = [...data];

    if (hasSearchFilter) {
      filteredData = filteredData.filter((item) =>
        item.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    return filteredData;
  }, [data, filterValue]);

  const items = React.useMemo(() => {
    return filteredItems.slice(0, 4);
  }, [filteredItems]);

  const renderCell = React.useCallback((item, columnKey) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "image":
        return <Image width={100} height={100} isZoomed alt={item.name} src={item.image} />;
      case "name":
        return <p className=" text-md">{item.name}</p>;

      case "price":
        return <p className="font-bold text-2xl">{item.price}</p>;
      default:
        return cellValue;
    }
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full ",
              inputWrapper: "border-1",
            }}
            placeholder="Search by name..."
            size="sm"
            startContent={
              <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="1em"
                role="presentation"
                viewBox="0 0 24 24"
                width="1em"
                className="text-default-300"
              >
                <path
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d="M22 22L20 20"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            }
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
        </div>
      </div>
    );
  }, [filterValue, onSearchChange, data.length, hasSearchFilter]);

  return (
    <Table
      isCompact
      hideHeader
      removeWrapper
      topContent={topContent}
      topContentPlacement="outside"
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
      </TableHeader>
      <TableBody emptyContent={"No data found"} items={items}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
