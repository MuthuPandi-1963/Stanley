import headset from '../../assets/headset.jpeg'
import wm from '../../assets/wirelessMouse.jpeg'
import kb from '../../assets/keyboard.jpeg'
import usbC from '../../assets/usb_c.jpeg'
import laptop from '../../assets/laptop.jpeg'
const ProductData = [
    {
      "id": 1,
      "name": "Wireless Mouse",
      "price": 499.99,
      "stock": 120,
      "description": "Ergonomic wireless mouse with adjustable DPI and silent clicks.",
      "isAvailable": true,
      image : wm
    },
    {
      "id": 2,
      "name": "Mechanical Keyboard",
      "price": 2599.00,
      "stock": 50,
      "description": "RGB backlit mechanical keyboard with blue switches.",
      "isAvailable": true,
      image : kb
    },
    {
      "id": 3,
      "name": "USB-C Hub",
      "price": 899.50,
      "stock": 0,
      "description": "7-in-1 USB-C hub with HDMI, SD card, and power delivery support.",
      "isAvailable": false,
      image : usbC
    },
    {
      "id": 4,
      "name": "Gaming Headset",
      "price": 1999.75,
      "stock": 35,
      "description": "Surround sound gaming headset with detachable mic and LED lighting.",
      "isAvailable": true
      ,image :headset
    },
    {
      "id": 5,
      "name": "Laptop Stand",
      "price": 749.25,
      "stock": 15,
      "description": "Adjustable aluminum laptop stand for ergonomic desk setup.",
      "isAvailable": true,
      image:laptop
    }
  ]
export default ProductData;