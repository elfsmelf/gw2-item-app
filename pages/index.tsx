import React, { useState, useMemo } from 'react'
import { Input } from "@/my-game-item-filter/components/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/my-game-item-filter/components/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/my-game-item-filter/components/components/ui/table"
import { Slider } from "@/my-game-item-filter/components/components/ui/slider"

// Define a more comprehensive interface for your mock data items
interface MockDataItem {
  id: number;
  "1d_buy_sold": number;
  "1d_sell_sold": number;
  buy_price: number;
  buy_quantity: number;
  chat_link: string;
  img: string;
  name: string;
  rarity: string;
  sell_price: number;
  sell_quantity: number;
  type: string;
  weaponType: string;
}

// Your mock data (ensure it matches the MockDataItem interface)
const mockData: MockDataItem[] = [
  {
    "id": 24,
    "1d_buy_sold": 65,
    "1d_sell_sold": 562,
    "buy_price": 90,
    "buy_quantity": 78861,
    "chat_link": "[&AgEYAAAA]",
    "img": "https://icons-gw2.darthmaim-cdn.com/1D05D1EE04E16E69710E1EAB11AC466BBF105778/219347.png",
    "name": "Sealed Package of Snowballs",
    "rarity": "Basic",
    "sell_price": 136,
    "sell_quantity": 152549,
    "type": "Consumable",
    "weaponType": "Generic"
  },
  {
    "id": 68,
    "1d_buy_sold": 3,
    "1d_sell_sold": 0,
    "buy_price": 111111,
    "buy_quantity": 3416,
    "chat_link": "[&AgFEAAAA]",
    "img": "https://icons-gw2.darthmaim-cdn.com/F03808FFE89B40044671EED2E427053B389BE0A1/61007.png",
    "name": "Mighty Country Coat",
    "rarity": "Basic",
    "sell_price": 122,
    "sell_quantity": 460,
    "type": "Armor",
    "weaponType": "Coat"
  },
  // Add more items as needed...
];

// Now TypeScript knows the structure of mockData items
const uniqueRarities = Array.from(new Set(mockData.map(item => item.rarity)));
const uniqueTypes = Array.from(new Set(mockData.map(item => item.type)));

export default function GameItemFilter() {
    const [searchTerm, setSearchTerm] = useState('')
    const [rarityFilter, setRarityFilter] = useState('')
    const [typeFilter, setTypeFilter] = useState('')
    const [buyPriceRange, setBuyPriceRange] = useState([0, 1000000])
    const [sellPriceRange, setSellPriceRange] = useState([0, 1000000])
    const [buyQuantityRange, setBuyQuantityRange] = useState([0, 1000])
    const [sellQuantityRange, setSellQuantityRange] = useState([0, 1000])

    // ... rest of your component code
}