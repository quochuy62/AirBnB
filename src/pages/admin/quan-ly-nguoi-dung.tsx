import React from "react";
import { Input, Space } from "antd";
import type { SearchProps } from "../Search";
import { Table, Tag } from "antd";
import "./admin.css";

const { Search } = Input;
const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const { Column, ColumnGroup } = Table;
interface DataType {
  key: React.Key;
  maPhong: number;
  tenPhong: string;
  hinhAnh: string;
  viTri: string;
  guesMax: number;
  action: any;
}

const data: DataType[] = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
];

function QuanLyNguoiDung() {
  return (
    <div className="divAdmin">
      <Space className="tim" direction="vertical">
        <Search
          placeholder="Nhập vào tên phòng"
          onSearch={onSearch}
          // style={{ width: 500 }}
        />
      </Space>

      <Table dataSource={data} pagination={false}>
        <Column title="Mã phòng" dataIndex="maPhong" key="maPhong" />
        <Column title="Tên phòng" dataIndex="tenPhong" key="tenPhong" />
        <Column className="hinhAnh"
          title="Hình ảnh"
          dataIndex="hinhAnh"
          key="hinhAnh"
          render={(_: any, record: DataType) => (
            <Space size="middle">
              <a>Chỉnh sửa</a>

            </Space>
          )}
        />
        <Column title="Vị trí" dataIndex="viTri" key="viTri" />
        <Column title="GuesMax" dataIndex="guesMax" key="guesMax" />
        <Column
        className="action"
          title="Action"
          key="action"
          render={(_: any, record: DataType) => (
            <Space size="middle">
              <a>Xem thông tin chi tiết</a>
              <a>Sửa</a>
              <a>Xóa</a>
            </Space>
          )}
        />
      </Table>
    </div>
   
  );
}

export default QuanLyNguoiDung;
