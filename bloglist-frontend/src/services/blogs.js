import axios from "axios"

const baseUrl = "http://localhost:3003/api/blogs"

let token = null

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl)
    return response.data
  } catch (error) {
    throw error
  }
}

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  }
  try {
    const response = await axios.post(baseUrl, newObject, config)
    return response.data
  } catch (error) {
    throw error
  }
}

const deleteBlog = async (id) => {
  const config = {
    headers: { Authorization: token },
  }
  try {
    await axios.delete(`${baseUrl}/${id}`, config)
  } catch (error) {
    throw error
  }
}

const update = async (id, updatedObject) => {
  const config = {
    headers: { Authorization: token },
  }

  try {
    const response = await axios.put(`${baseUrl}/${id}`, updatedObject, config)
    return response.data
  } catch (error) {
    throw error
  }
}

export default { getAll, create, setToken, update, deleteBlog }
