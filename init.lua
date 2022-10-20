vim.o.guifont = 'Courier:h14'
vim.o.termguicolors = true
vim.o.syntax = 'on'
vim.o.errorbells = false
vim.o.showmode = false
vim.bo.swapfile = false
vim.o.backup = false
vim.o.undodir = vim.fn.stdpath('config') .. '/undodir'
vim.o.undofile = true
vim.o.incsearch = true
vim.o.hidden = true
vim.o.completeopt='menuone,noinsert,noselect'
vim.bo.autoindent = true
vim.bo.smartindent = true
vim.o.tabstop = 2
vim.o.softtabstop = 2
vim.o.shiftwidth = 2
vim.o.expandtab = true
vim.wo.number = true
vim.wo.signcolumn = 'yes'
vim.wo.wrap = true
vim.o.mouse = 'a'
vim.o.mousehide = true
vim.o.splitright = true
vim.o.splitbelow = true
vim.o.linebreak = true
vim.o.scrolljump = 5
vim.o.scrolloff = 3
vim.o.ignorecase = true
vim.o.smartcase = true
vim.o.hlsearch = true
vim.o.wildmenu = true
vim.cmd([[
  colorscheme base16-greenscreen
  highlight Cursor guifg=yellow guibg=yellow
  highlight clear SignColumn      " SignColumn should match background
  highlight clear LineNr          " Current line number row will have same background color in relative mode
]])

vim.g.mapleader = ' '
local key_mapper = function(mode, key, result)
  vim.api.nvim_set_keymap(
    mode,
    key,
    result,
    {noremap = true, silent = true}
  )
end

key_mapper('n', '<C-p>', ':lua require"telescope.builtin".find_files()<CR>')
key_mapper('n', '<leader>fs', ':lua require"telescope.builtin".live_grep()<CR>')
key_mapper('n', '<leader>fh', ':lua require"telescope.builtin".help_tags()<CR>')
key_mapper('n', '<C-b>', ':lua require"telescope.builtin".buffers()<CR>')
key_mapper('n', '<Tab>', '<c-w>w')
key_mapper('n', '<bs>', '<c-w>W')
key_mapper('n', '<C-e>', ':NERDTreeToggle<CR>')
key_mapper('n', '<CR>', ':noh')

local vim = vim
local execute = vim.api.nvim_command
local fn = vim.fn
-- ensure that packer is installed
local install_path = fn.stdpath('data')..'/site/pack/packer/opt/packer.nvim'
if fn.empty(fn.glob(install_path)) > 0 then
    execute('!git clone https://github.com/wbthomason/packer.nvim '..install_path)
    execute 'packadd packer.nvim'
end
vim.cmd('packadd packer.nvim')
local packer = require'packer'
local util = require'packer.util'
packer.init({
  package_root = util.join_paths(vim.fn.stdpath('data'), 'site', 'pack')
})
packer.startup(function()
  local use = use
  use {
    'nvim-treesitter/nvim-treesitter',
    run = 'TSUpdate'
  }
  use 'sheerun/vim-polyglot'

  use 'nvim-lua/popup.nvim'
  use 'nvim-lua/plenary.nvim'
  use 'nvim-lua/telescope.nvim'
  use 'jremmen/vim-ripgrep'

  use 'p00f/nvim-ts-rainbow'
  use 'jiangmiao/auto-pairs' 
  use 'windwp/nvim-ts-autotag'
  use 'lukas-reineke/indent-blankline.nvim'
  use 'tpope/vim-surround'
  use 'terryma/vim-multiple-cursors'
  use 'mattn/emmet-vim'
  use 'scrooloose/nerdtree' 
  use 'xuyuanp/nerdtree-git-plugin'
  use 'scrooloose/nerdcommenter'
  use 'airblade/vim-gitgutter'

  use 'RRethy/nvim-base16'
  use {
    'norcalli/nvim-colorizer.lua',
    cmd = 'ColorizerToggle',
    config = function()
      require('colorizer').setup()
    end
  }
  end
)

require'nvim-treesitter.configs'.setup {
  ensure_installed = { "javascript", "typescript", "java", "html", "css" },
  highlight = {
    enable = true,
  }
}

require'telescope'.setup {
  defaults = {
    file_ignore_patterns = { "node_modules", "^npm-cache/" }
  }
}

