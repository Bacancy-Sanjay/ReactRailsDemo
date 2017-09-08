Rails.application.routes.draw do
  resources :projects
  root 'dashboard#index'

  namespace :api do
  	resources :events, only: [:create, :index, :update, :destroy] do
  		get :search, on: :collection
  	end
  end
  resources :events

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
