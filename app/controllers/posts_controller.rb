class PostsController < ApplicationController
  def index
    @posts = Post.order(id: "DESC")
  end

  def new
  end

  def create
    post = Post.create(content: params[:content])
    render json:{ post: post }
    # (post) をJSON形式でレスポンスとしてクライアントに返す　非同期
    # redirect_to action: :index　　同期通信
  end
end

