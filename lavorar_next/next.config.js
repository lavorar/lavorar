/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/dozjn0kxw/image/upload'
  }
}

module.exports = nextConfig
