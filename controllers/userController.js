// controllers/userController.js
const prisma = require('../prisma/client');

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users); 
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

const getUserById = async (req, res) => {
  try {

    const { id } = req.params;
    const userId = parseInt(id);

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
};



const updateUser = async (req, res) => {
  try {
    const { id, name, email, password } = req.body;
    const userId = parseInt(id);

    // Verifica se o usuário existe antes de atualizar
    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!existingUser) {
      return res.status(404).json({ message: 'Nenhum usuário encontrado com o ID especificado' });
    }

    // Atualiza os dados do usuário
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name,
        email,
        password,
      },
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ erro: 'Erro ao atualizar usuário' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id);

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'Nenhum usuário encontrado com o ID especificado' });
    }

    await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    res.status(500).json({ erro: 'Erro ao excluir usuário' });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
