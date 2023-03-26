export const model = (message) => {
  return {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: `${message}` }],
    temperature: 0.7
  }
}
