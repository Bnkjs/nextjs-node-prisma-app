import { SaveOneContactResObj, SaveOneContactResStatus } from "../src/utils/FormContactFunction"

it("should not register contact in the db without contact's name ", async ()=>{
  const wrongUserInfos = {
    name: undefined, email: "olivier@zorg.com", PP: "robot.png"
  }
  expect(await SaveOneContactResStatus(wrongUserInfos)).toEqual(403)
})
it("should not register contact in the db without contact's email ", async ()=>{
  const wrongUserInfos = {
    name: "olivier", email: undefined, PP: "robot.png"
  }
  expect(await SaveOneContactResStatus(wrongUserInfos)).toEqual(403)
})

it('response should be status(ok) even witout PP info', async () =>{
  const userForTest = {
    name: "paul", email: "test@zorg.fr", PP: ""
  }
  expect(await SaveOneContactResStatus(userForTest)).toEqual(200)
})

it('response should be equal to infos of userFortTest', async () =>{
  const userForTest = {
    name: "paul", email: "test@zorg.fr", PP: "robot.png"
  }
  expect(await SaveOneContactResObj(userForTest)).toMatchObject(userForTest)
})

