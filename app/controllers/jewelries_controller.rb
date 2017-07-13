class JewelriesController < ApplicationController
  layout 'admin'
  before_action :authenticate_admin!
  before_action :set_jewelry, only: [:show, :edit, :update, :destroy]

  # GET /jewelries
  # GET /jewelries.json
  def index
    @jewelries = Jewelry.order(:position).includes(:collection)
  end

  # GET /jewelries/1
  # GET /jewelries/1.json
  def show
  end

  # GET /jewelries/new
  def new
    @jewelry = Jewelry.new
  end

  # GET /jewelries/1/edit
  def edit
  end

  # POST /jewelries
  # POST /jewelries.json
  def create
    @jewelry = Jewelry.new(jewelry_params)

    respond_to do |format|
      if @jewelry.save
        format.html { redirect_to jewelries_path, notice: 'Jewelry was successfully created.' }
        format.json { render :show, status: :created, location: @jewelry }
      else
        format.html { render :new }
        format.json { render json: @jewelry.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /jewelries/1
  # PATCH/PUT /jewelries/1.json
  def update
    respond_to do |format|
      if @jewelry.update(jewelry_params)
        format.html { redirect_to jewelries_path, notice: 'Jewelry was successfully updated.' }
        format.json { render :show, status: :ok, location: @jewelry }
      else
        format.html { render :edit }
        format.json { render json: @jewelry.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /jewelries/1
  # DELETE /jewelries/1.json
  def destroy
    @jewelry.destroy
    respond_to do |format|
      format.html { redirect_to jewelries_url, notice: 'Jewelry was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_jewelry
      @jewelry = Jewelry.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def jewelry_params
      params.require(:jewelry).permit(:name, :inspiration, :material, :visible, :position, :picture, :collection_id)
    end
end
