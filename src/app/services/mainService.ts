import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AllProducts} from "../allProducts";
import {Feedback} from "../feedback";
import {Favourite} from "../favourite";
import {Category} from "../category";
import {Compare} from "../Compare";
import {Chat} from "../chat";
import {ChatComponent} from "../chat/chat.component";
import {ChatContact} from "../chatContact";
import {User} from "../user";


@Injectable({
  providedIn: 'root'
})
export class MainService {

  private getAllProductsUrl: string;
  private addProductUrl: string;
  private getCategoryUrl: string;
  private postCategoryUrl: string;
  private usersProductsUrl: string;
  private favouriteUrl: string;
  private updateProductUrl: string;
  private deleteProductUrl: string;
  private editProductUrl: string;
  private feedbackUrl: string;
  private deleteFeedbackUrl: string;
  private removeFavoriteUrl: string;
  private postKindOfCategoryUrl: string;
  private getKindOfCategoryUrl: string;
  private getProductsByCategoryUrl: string;
  private postProductsByCategoryUrl: string;
  private getImageUrl: string;
  private getCategoryImageUrl: string;
  private postCompareProductUrl: string;
  private getCompareProductUrl: string;
  private postChatUrl: string;
  private getChatUrl: string;
  private postAddChatContactUrl: string;
  private getChatContactUrl: string;
  private postAcceptChatContactUrl: string;
  private getChatContactsAcceptedUrl: string;
  private getWhoIamUrl: string;

  constructor(private http: HttpClient) {
    this.getAllProductsUrl = 'https://msbazar-3e8234d30168.herokuapp.com/advertisement';
    this.addProductUrl = 'https://msbazar-3e8234d30168.herokuapp.com/advertisement';
    this.getCategoryUrl = 'https://msbazar-3e8234d30168.herokuapp.com/advertisement/category';
    this.postCategoryUrl = 'https://msbazar-3e8234d30168.herokuapp.com/category';
    this.usersProductsUrl = 'https://msbazar-3e8234d30168.herokuapp.com/myproducts';
    this.favouriteUrl = 'https://msbazar-3e8234d30168.herokuapp.com/favourite';
    this.updateProductUrl = 'https://msbazar-3e8234d30168.herokuapp.com/updateproduct';
    this.deleteProductUrl = 'https://msbazar-3e8234d30168.herokuapp.com/deleteproduct';
    this.editProductUrl = 'https://msbazar-3e8234d30168.herokuapp.com/editproduct';
    this.feedbackUrl = 'https://msbazar-3e8234d30168.herokuapp.com/feedback';
    this.deleteFeedbackUrl = 'https://msbazar-3e8234d30168.herokuapp.com/deletefeedback';
    this.removeFavoriteUrl = 'https://msbazar-3e8234d30168.herokuapp.com/removefavourite';
    this.postKindOfCategoryUrl = 'https://msbazar-3e8234d30168.herokuapp.com/createcategory';
    this.getKindOfCategoryUrl = 'https://msbazar-3e8234d30168.herokuapp.com/getallcategories';
    this.getProductsByCategoryUrl = 'https://msbazar-3e8234d30168.herokuapp.com/getcategoryinformation';
    this.postProductsByCategoryUrl = 'https://msbazar-3e8234d30168.herokuapp.com/postcategoryinformation';
    this.getImageUrl = 'https://msbazar-3e8234d30168.herokuapp.com/get/image/info/';
    this.getCategoryImageUrl = 'https://msbazar-3e8234d30168.herokuapp.com/get/categoryimage/info/';
    this.postCompareProductUrl = 'https://msbazar-3e8234d30168.herokuapp.com/addProductToCompare';
    this.getCompareProductUrl = 'https://msbazar-3e8234d30168.herokuapp.com/getCompareProducts';
    this.postChatUrl = 'https://msbazar-3e8234d30168.herokuapp.com/chat';
    this.getChatUrl = 'https://msbazar-3e8234d30168.herokuapp.com/chatGet';
    this.postAddChatContactUrl = 'https://msbazar-3e8234d30168.herokuapp.com/addChatContact';
    this.getChatContactUrl = 'https://msbazar-3e8234d30168.herokuapp.com/getChatContacts';
    this.postAcceptChatContactUrl = 'https://msbazar-3e8234d30168.herokuapp.com/acceptChatContact';
    this.getChatContactsAcceptedUrl = 'https://msbazar-3e8234d30168.herokuapp.com/getChatContactsAccepted';
    this.getWhoIamUrl = 'https://msbazar-3e8234d30168.herokuapp.com/whoIam';
  }

  public getAllProducts(): Observable<AllProducts[]> {
    return this.http.get<AllProducts[]>(this.getAllProductsUrl);
  }
  public addProduct(product: AllProducts) {
    return this.http.post<AllProducts>(this.addProductUrl, product);
  }
  public updateProduct(product: AllProducts) {
    return this.http.post<AllProducts>(this.updateProductUrl, product);
  }
  public deleteProduct(product: AllProducts){
    return this.http.post<AllProducts>(this.deleteProductUrl, product);
  }
  public editProduct(product: AllProducts) {
    return this.http.post<AllProducts>(this.editProductUrl, product);
  }
  public getOneCategory(): Observable<AllProducts[]>{
    return this.http.get<AllProducts[]>(this.getCategoryUrl);
  }
  public postCategory(category: string) {
    return this.http.post<string>(this.postCategoryUrl, category);
  }
  public getUsersProducts(): Observable<AllProducts[]> {
    return this.http.get<AllProducts[]>(this.usersProductsUrl);
  }

  public addToFavourite(product: number, user: number) {
    return this.http.post<Favourite>(this.favouriteUrl, {"product" :{ "id": product}, "user" : {"id": user}});
  }

  public getFavourite(): Observable<AllProducts[]> {
    return this.http.get<AllProducts[]>(this.favouriteUrl);
  }

  public removeFavourite(product: number){
    return this.http.post<AllProducts>(this.removeFavoriteUrl, {"id": product});
  }

  public postFeedback(feedback: Feedback) {
    return this.http.post<Feedback>(this.feedbackUrl, feedback);
  }
  public getFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.feedbackUrl);
  }
  public deleteFeedback(feedback: Feedback){
    return this.http.post<Feedback>(this.deleteFeedbackUrl, feedback);
  }
  public postKindOfCategory(category: Category) {
    return this.http.post<Category>(this.postKindOfCategoryUrl, category);
  }
  public getKindOfCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.getKindOfCategoryUrl);
  }

  public postProductsByCategory(category: number){
    return this.http.post<Category>(this.postProductsByCategoryUrl, { "id": category});
  }

  public getProductsByCategory(): Observable<AllProducts[]> {
    return this.http.get<AllProducts[]>(this.getProductsByCategoryUrl);
  }

  getImage(id: number) {
    return this.http.get(this.getImageUrl + id);
  }

  getCategoryImage(id: number) {
    return this.http.get(this.getCategoryImageUrl + id);
  }

  public postCompareProduct(product: AllProducts) {
    return this.http.post<Compare>(this.postCompareProductUrl, {"product1" :{ "id": product.id}});
  }

  public getCompareProduct(): Observable<Compare> {
    return this.http.get<Compare>(this.getCompareProductUrl);
  }

  public postChat(message:String, receiver: String){
    return this.http.post<Chat>(this.postChatUrl, {"message":message, "userReceiver":{"username": receiver}})
  }

  public getChat(receiver: String, sender:String): Observable<Chat[]>{
    return this.http.post<Chat[]>(this.getChatUrl, {"userReceiver":{"username": receiver}, "userSender":{"username": sender}});
  }


  public postAddChatContact(user2: String){
    return this.http.post<ChatContact>(this.postAddChatContactUrl, {"secondUser":{"username": user2}})
  }

  public getChatContacts(): Observable<ChatContact[]>{
    return this.http.get<ChatContact[]>(this.getChatContactUrl);
  }

  public postAcceptChatContact(chatContact: number){
    return this.http.post<ChatContact>(this.postAcceptChatContactUrl, {"id": chatContact});
  }

  public getChatContactsAccepted(): Observable<ChatContact[]>{
    return this.http.get<ChatContact[]>(this.getChatContactsAcceptedUrl);
  }

  public getWhoIam(): Observable<User> {
    return this.http.get<User>(this.getWhoIamUrl);
  }
}
