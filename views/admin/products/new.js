const layout = require('../layout')

const { getError } = require('../../helpers')

module.exports = ({ errors }) => {
  return layout({
    content: `
        
        <form method="POST">
            <input placeholder="Title" name="Title" />
            <input placeholder="Price" name="Price" />
            <input placeholder="file" name="image" />
            <button>Submit</button>
        </form>
        `
  })
}
