import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import items from '../Api/index'
import styles from '../../styles/Home.module.css'
import { Categories } from '../component/Categories'
import { Menu } from '../component/Menu'

//const allCategories = ['all', ...new Set(items.map((item) => item.category))]
//console.log(allCategories);

export default function Home() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState([]);
  //const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>nosso menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
