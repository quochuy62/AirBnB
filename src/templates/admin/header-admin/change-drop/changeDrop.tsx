import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import css from  "./change-drop.module.css";


function ChangeDrop() {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
  
  ];
  return (
    <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <div className={css.ad}>
      <Space>
        Admin 
        <DownOutlined />
      </Space>

      </div>
    </a>
  </Dropdown>
  )
}

export default ChangeDrop;
