const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function downloadSprites() {
  const spritesDir = path.join(__dirname, 'sprites');
  if (!fs.existsSync(spritesDir)) {
    fs.mkdirSync(spritesDir);
  }

  for (let id = 1; id <= 151; id++) {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`, { timeout: 10000 });
      const sprites = response.data.sprites;
const spriteUrl = sprites.other?.['official-artwork']?.front_default
  || sprites.versions?.['generation-v']?.['black-white']?.animated?.front_default
  || sprites.front_default;
      
      if (spriteUrl) {
        const imageResponse = await axios.get(spriteUrl, { responseType: 'arraybuffer' });
        fs.writeFileSync(path.join(spritesDir, `${id}.png`), imageResponse.data);
        console.log(`Downloaded ${id}.png`);
      }
    } catch (error) {
      console.error(`Error downloading ${id}:`, error.message);
      let retries = 3;
      while (retries--) {
        try {
          await new Promise(resolve => setTimeout(resolve, 2000));
          const retryResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`, { timeout: 5000 });
          const retrySpriteUrl = retryResponse.data.sprites.other?.['official-artwork']?.front_default
            || retryResponse.data.sprites.versions?.['generation-v']?.['black-white']?.animated?.front_default
            || retryResponse.data.sprites.front_default;
          const imageResponse = await axios.get(retrySpriteUrl, { responseType: 'arraybuffer' });
          fs.writeFileSync(path.join(spritesDir, `${id}.png`), imageResponse.data);
          console.log(`Downloaded ${id}.png`);
          break;
        } catch (retryError) {
          console.error(`Retry ${3 - retries} failed for ${id}:`, retryError.message);
        }
      }
    }
  }
}

downloadSprites();